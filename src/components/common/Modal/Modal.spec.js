import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import { matchers } from 'jest-emotion';

import Modal from './index';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const testId = 'modal-component';
const childrenTestId = 'modal-component-children';

const MockedModalChildren = () => (
  <div data-testid={childrenTestId} style={{ width: '100%', height: '100%' }}>
    This is a mocked children content
  </div>
);

describe('<Modal />', () => {
  it('Renders the Modal unchanged', () => {
    const { asFragment, queryByTestId } = render(<Modal />, {
      wrapper: withGlobals,
    });
    expect(asFragment()).toMatchSnapshot(); // Save the snapshot of a null component
    expect(queryByTestId(testId)).toBeNull();
  });

  it("Hide modal when 'isInitiallyOpened' is false", () => {
    const { queryByTestId } = render(<Modal isInitiallyOpened={false} />, {
      wrapper: withGlobals,
    });
    expect(queryByTestId(testId)).toBeNull();
  });

  it("Show modal when 'isInitiallyOpened' is true", () => {
    const { queryByTestId, getByTestId, asFragment } = render(<Modal isInitiallyOpened />, {
      wrapper: withGlobals,
    });
    expect(queryByTestId(testId)).toBeTruthy();
    expect(asFragment()).toMatchSnapshot(); // Save the snapshot of a fully rendered component
    expect(getByTestId(testId).getAttribute('aria-modal')).toBe('true');
  });

  it("Call 'onOpening' once if callback is provided", () => {
    const onOpening = jest.fn();

    render(<Modal isInitiallyOpened onOpening={onOpening} />, {
      wrapper: withGlobals,
    });
    expect(onOpening).toHaveBeenCalledTimes(1);
  });

  it('Keep Modal open when clicked into children content', () => {
    let open = true;
    const onClosing = jest.fn(() => {
      open = false;
    });
    const { getByTestId } = render(
      <Modal isInitiallyOpened onClosing={onClosing}>
        {() => <MockedModalChildren />}
      </Modal>,
      {
        wrapper: withGlobals,
      }
    );

    fireEvent.click(getByTestId(childrenTestId));

    expect(open).toBe(true);
    expect(getByTestId(testId).getAttribute('aria-modal')).toBe('true');
  });

  it('Dismiss desktop Modal when clicked outside children content', () => {
    let open = true;
    const onClosing = jest.fn(() => {
      open = false;
    });
    const { getByTestId, queryByTestId } = render(
      <Modal isInitiallyOpened onClosing={onClosing}>
        {() => <MockedModalChildren />}
      </Modal>,
      {
        wrapper: withGlobals,
      }
    );

    fireEvent.click(getByTestId(testId));

    expect(open).toBe(false);
    expect(queryByTestId(testId)).toBeNull();
  });

  it('Dismiss mobile Modal when clicked on the close button', () => {
    let open = true;
    const onClosing = jest.fn(() => {
      open = false;
    });
    const { getByTestId, queryByTestId } = render(
      <Modal isInitiallyOpened onClosing={onClosing}>
        {() => <MockedModalChildren />}
      </Modal>,
      {
        wrapper: withGlobals,
      }
    );

    fireEvent.click(getByTestId('modal-close-button'));

    expect(open).toBe(false);
    expect(queryByTestId(testId)).toBeNull();
  });

  it('Show modal header only on mobile', () => {
    const { getByTestId } = render(<Modal isInitiallyOpened>{() => <MockedModalChildren />}</Modal>, {
      wrapper: withGlobals,
    });

    const elm = getByTestId('modal-header-mobile');

    expect(elm).toHaveStyleRule('display', 'none');
    expect(elm).toHaveStyleRule('display', 'flex', {
      media: `(max-width: 48em)`,
    });
  });
});
