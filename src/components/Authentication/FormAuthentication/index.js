import React, { useState, useContext, useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useLazyQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { LOGIN_WITH_USER_NAME } from '@graphql/queries/login';
import { REGISTER_USER } from '@graphql/queries/me';

import UserContext from '@utils/userContext';

import {
  FormSection,
  FormWrapper,
  SectionTitle,
  InputLayout,
  Input,
  SubmitWrapper,
  SubmitButton,
  ErrorMessage,
  StyleForgotPassword,
} from './style';

const FormAuthentication = ({ formTitle, submitButtonTitle, afterSubmit, onClick }) => {
  // TODO: add registration query as well

  const { dispatch: userDispatch } = useContext(UserContext);

  const [serverError, setServerError] = useState(null);

  const { register, handleSubmit, errors, watch } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const handleServerErrors = error => {
    const errorMessage = error.graphQLErrors && error.graphQLErrors[0] ? error.graphQLErrors[0].message : error.message;
    setServerError(errorMessage);
  };

  const processLogin = loginData => {
    userDispatch({
      type: 'login',
      data: { ...loginData, id: loginData.wpid || loginData.id },
    });
    afterSubmit();
  };

  const onLoginSucess = response => {
    const loginDataResult = get(response, 'loginWithUserName', {});

    if (!loginDataResult || !loginDataResult.userToken) {
      return setServerError('Invalid username or password!');
    }

    window.lxt('identify', 'email', '{{Lexer - Login Email}}');
    window.lxt('converted');

    processLogin(loginDataResult);
  };

  const onRegisterSuccess = response => {
    const userData = get(response, 'register', {});

    if (!userData || !userData.wpid || !userData.userToken) {
      return setServerError('Something went wrong');
    }

    window.lxt('identify', 'email', '{{Lexer - Newsletter Email}}');
    window.lxt('converted');

    window.lxt('identify', 'email', '{{Lexer - Registration Email}}');
    window.lxt('converted');

    processLogin(userData);
  };

  const [registerUser, { loading: submittingRegister }] = useLazyQuery(REGISTER_USER, {
    onCompleted: onRegisterSuccess,
    onError: handleServerErrors,
    fetchPolicy: 'no-cache',
  });

  const [loginWithUserName, { loading: submitting }] = useLazyQuery(LOGIN_WITH_USER_NAME, {
    onCompleted: onLoginSucess,
    onError: handleServerErrors,
    fetchPolicy: 'no-cache',
  });

  const isRegistering = submitButtonTitle === 'Register';

  const onSubmit = data => {
    if (isRegistering) {
      registerUser({
        variables: {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          surname: data.lastName,
        },
      });
      return;
    }

    loginWithUserName({
      variables: {
        // email: data.email, // New API will use email (which it expects via the username parameter)
        username: data.email,
        password: data.password,
      },
    });
  };

  const onChange = useCallback(() => {
    setServerError(null);
  }, []);

  return (
    <FormSection data-testid="form-authentication-component">
      {formTitle && <SectionTitle>{formTitle}</SectionTitle>}

      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <InputLayout isRegistering={isRegistering}>
          {isRegistering && (
            <>
              <Input
                name="email"
                placeholder="Email Address"
                type="text"
                register={register({
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/i,
                })}
                error={errors.email && 'Provide a valid Email Address.'}
                ariaLabel="email-address-input"
                onChange={onChange}
              />
              <Input
                name="firstName"
                placeholder="First Name"
                type="text"
                register={register({
                  required: isRegistering,
                })}
                error={errors.firstName && 'First Name is required.'}
                ariaLabel="first-name-input"
                onChange={onChange}
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                type="text"
                register={register({
                  required: isRegistering,
                })}
                error={errors.surname && 'Last Name is required.'}
                ariaLabel="last-name-input"
                onChange={onChange}
              />
            </>
          )}
          {/* New authentication API will use only email not email and username */}
          {!isRegistering && (
            <Input
              name="email"
              placeholder="Email Address"
              type="text"
              register={register({
                required: true,
                pattern: /^\S+@\S+\.\S+$/i,
              })}
              error={errors.email && 'Provide a valid Email Address.'}
              ariaLabel="email-address-input"
              onChange={onChange}
            />
          )}
          <Input
            name="password"
            placeholder="Password"
            type="password"
            register={register({
              required: 'Password required',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
            error={errors.password && errors.password.message}
            ariaLabel="password-input"
            onChange={onChange}
          />
          {!isRegistering && <StyleForgotPassword onClick={onClick}>Forgot password ?</StyleForgotPassword>}
          {isRegistering && (
            <Input
              name="confirmPassword"
              placeholder="Confirm password"
              type="password"
              register={register({
                required: 'You need to confirm the password',
                validate: value => value === password.current || 'The passwords do not match',
              })}
              error={errors.confirmPassword && errors.confirmPassword.message}
              ariaLabel="confirm-password-input"
              onChange={onChange}
            />
          )}
        </InputLayout>

        {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

        <SubmitWrapper>
          <SubmitButton disabled={submitting || submittingRegister} variant="primary" type="submit">
            {submitting || submittingRegister ? 'Submitting' : submitButtonTitle}
          </SubmitButton>
        </SubmitWrapper>
      </FormWrapper>
    </FormSection>
  );
};

export default FormAuthentication;
