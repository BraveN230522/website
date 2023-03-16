import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormSection, FormWrapper, Input, InputLayout, SubmitButton, SubmitWrapper } from '../FormAuthentication/style';
import { HeadingReset, TextBackToLogin, TextForgot, TextTitle, WrapperForgot } from './styleForgotPass';

const ForgotPass = ({ onClick }) => {
  const [serverError, setServerError] = useState(null);
  const onChange = useCallback(() => {
    setServerError(null);
  }, []);
  const { handleSubmit, errors, watch } = useForm();
  return (
    <WrapperForgot>
      <HeadingReset>
        <span onClick={onClick}>‹</span>
        <TextForgot>Forgot Password</TextForgot>
      </HeadingReset>

      <TextTitle>Enter your Email and link reset password will be sent to you!</TextTitle>

      <FormSection data-testid="form-authentication-component">
        <FormWrapper>
          <InputLayout>
            <Input
              name="email"
              placeholder="Email Address"
              type="text"
              error={errors.email && 'Provide a valid Email Address.'}
              ariaLabel="email-address-input"
              onChange={onChange}
            />
          </InputLayout>
          <SubmitWrapper>
            <SubmitButton variant="primary" type="submit">
              Send request
            </SubmitButton>
          </SubmitWrapper>
        </FormWrapper>
      </FormSection>

      <TextBackToLogin onClick={onClick}>Back to Login</TextBackToLogin>
    </WrapperForgot>
  );
};

export default ForgotPass;
