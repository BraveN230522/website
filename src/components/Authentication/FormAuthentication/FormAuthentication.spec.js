import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import withGlobals from '@swiamTestUtils/withGlobals';
import { matchers } from 'jest-emotion';

import FormAuthentication from './index';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const testId = 'form-authentication-component';

const setup = (label, type) => {
  const utils = render(<FormAuthentication submitButtonTitle={type || 'Login'} />, {
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

describe('<FormAuthentication />', () => {
  it('Renders the Authentication unchanged', () => {
    const { asFragment, queryByTestId } = setup();
    expect(asFragment()).toMatchSnapshot();
    expect(queryByTestId(testId)).toBeTruthy();
  });

  it('The Login form can be filled', () => {
    const { input } = setup(['email-address-input', 'password-input'], 'Login');
    const [email, password] = input;

    fireEvent.change(email, {
      target: { value: 'james@bond.com' },
    });
    expect(email.value).toBe('james@bond.com');

    fireEvent.change(password, {
      target: { value: 'my-secret-123' },
    });
    expect(password.value).toBe('my-secret-123');
  });

  it('The Register form can be filled', () => {
    const { input } = setup(
      [
        'display-name-input',
        'first-name-input',
        'last-name-input',
        'email-address-input',
        'password-input',
        'confirm-password-input',
      ],
      'Register'
    );
    const [displayName, firstName, lastName, email, password, confirmPassword] = input;

    fireEvent.change(displayName, {
      target: { value: 'JamesBond' },
    });
    expect(displayName.value).toBe('JamesBond');

    fireEvent.change(firstName, {
      target: { value: 'James' },
    });
    expect(firstName.value).toBe('James');

    fireEvent.change(lastName, {
      target: { value: 'Bond' },
    });
    expect(lastName.value).toBe('Bond');

    fireEvent.change(email, {
      target: { value: 'james@bond.com' },
    });
    expect(email.value).toBe('james@bond.com');

    fireEvent.change(password, {
      target: { value: 'my-secret-123' },
    });
    expect(password.value).toBe('my-secret-123');

    fireEvent.change(confirmPassword, {
      target: { value: 'my-secret-1235555' },
    });
    expect(confirmPassword.value).toBe('my-secret-1235555');
  });
});
