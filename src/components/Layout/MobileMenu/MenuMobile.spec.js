import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';

import MobileMenu from './index';

afterEach(() => {
  cleanup();
});

describe('<MobileMenu />', () => {
  it('Renders the MobileMenu unchanged', () => {
    const { asFragment } = render(<MobileMenu />, {
      wrapper: withGlobals,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('Shows menu when is prop open false', () => {
    const handleToggle = jest.fn();
    const { getByTestId } = render(<MobileMenu open={false} onToggle={handleToggle} />, {
      wrapper: withGlobals,
    });
    expect(getByTestId('menu-mobile').getAttribute('aria-hidden')).toBe('true');
  });
  it('Shows menu when is prop open true', () => {
    const handleToggle = jest.fn();
    const { getByTestId } = render(<MobileMenu open onToggle={handleToggle} />, {
      wrapper: withGlobals,
    });
    expect(getByTestId('menu-mobile').getAttribute('aria-hidden')).toBe('false');
  });
  it('Opens the menu visibility when it is clicked', () => {
    let open = false;
    const handleToggle = jest.fn(() => {
      open = true;
    });
    const { getByTestId } = render(<MobileMenu open={open} onToggle={handleToggle} />, {
      wrapper: withGlobals,
    });

    fireEvent.click(getByTestId('menu-mobile'));

    expect(getByTestId('menu-mobile').getAttribute('aria-hidden')).toBe('true');
  });
  it('Closes the menu visibility when it is clicked', () => {
    let open = true;
    const handleToggle = jest.fn(() => {
      open = false;
    });
    const { getByTestId } = render(<MobileMenu open={open} onToggle={handleToggle} />, {
      wrapper: withGlobals,
    });

    fireEvent.click(getByTestId('menu-mobile'));

    expect(getByTestId('menu-mobile').getAttribute('aria-hidden')).toBe('false');
  });
});
