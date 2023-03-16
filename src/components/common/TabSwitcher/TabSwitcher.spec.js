import React, { useState } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import { matchers } from 'jest-emotion';

import TabSwitcher from './index';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const testId = 'tab-switcher-component';

const WithState = props => {
  const { leftLabel, rightLabel, shouldSetInitialFocus } = props;
  const [active, setActive] = useState('left');

  return (
    <>
      <TabSwitcher
        leftLabel={leftLabel}
        rightLabel={rightLabel}
        active={active}
        activeCallback={setActive}
        shouldSetInitialFocus={shouldSetInitialFocus}
      />
      <span>{`active tab is ${active}`}</span>
    </>
  );
};
WithState.defaultProps = {
  leftLabel: 'left',
  rightLabel: 'right',
  shouldSetInitialFocus: false,
};

const setup = shouldSetInitialFocus => {
  const utils = render(<WithState shouldSetInitialFocus={shouldSetInitialFocus} />, {
    wrapper: withGlobals,
  });

  return utils;
};

describe('<TabSwitcher />', () => {
  it('Renders the TabSwitcher unchanged', () => {
    const { asFragment, queryByTestId } = setup();
    expect(asFragment()).toMatchSnapshot();
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('Switch between left and right content', () => {
    const { getByText } = setup();

    // initial active tab
    expect(getByText(/active tab is left/i));

    // switch to right
    fireEvent.click(getByText('right'));
    expect(getByText(/active tab is right/i));

    // switch back to left
    fireEvent.click(getByText('left'));
    expect(getByText(/active tab is left/i));
  });

  it('Focus on left if shouldSetInitialFocus is true', () => {
    const shouldSetInitialFocus = true;
    const { getAllByText } = setup(shouldSetInitialFocus);
    expect(document.activeElement).toBe(getAllByText('left')[0]);
  });

  it('Should not focus on left if shouldSetInitialFocus is false', () => {
    const shouldSetInitialFocus = false;
    const { getAllByText } = setup(shouldSetInitialFocus);
    expect(document.activeElement).not.toBe(getAllByText('left')[0]);
  });
});
