import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import { matchers } from 'jest-emotion';

import AuthenticationWidget from './index';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const testId = 'authentication-widget-component';

const setup = label => {
  const utils = render(<AuthenticationWidget />, {
    wrapper: withGlobals,
  });

  if (!label) {
    return utils;
  }

  let input;
  if (typeof label === 'string') {
    input = utils.getByLabelText(label);
  } else {
    input = label.map(_ => utils.getByLabelText(_));
  }

  return {
    input,
    ...utils,
  };
};

describe('<AuthenticationWidget />', () => {
  it('Renders the Authentication unchanged', () => {
    const { asFragment, queryByTestId } = setup();
    expect(asFragment()).toMatchSnapshot();
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('Switch between login and register content', () => {
    const { getByText, getAllByText } = setup();

    fireEvent.click(getAllByText('Login')[0]);
    expect(getByText('Or Login with Email Address:')).toBeTruthy();
    expect(getAllByText('Login')[1]).toBeTruthy();

    fireEvent.click(getAllByText('Register')[0]);
    expect(getByText('Or Register with Email Address:')).toBeTruthy();
    expect(getAllByText('Register')[1]).toBeTruthy();
  });
});
