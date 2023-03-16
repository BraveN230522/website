import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import eyeLogoOff from '@public/svg/eye-off.svg';
import eyeLogo from '@public/svg/eye.svg';
import { FormSection, FormWrapper, Input, InputLayout, SubmitButton, SubmitWrapper } from '../FormAuthentication/style';
import { HeadingReset, TextForgot, WrapperForgot } from './styleForgotPass';
import { ImgEye, Separate, WrapperInput } from './styleResetPassWord';

const ResetPassWord = () => {
  const [serverError, setServerError] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const onChange = useCallback(() => {
    setServerError(null);
  }, []);
  const { handleSubmit, errors } = useForm();
  return (
    <WrapperForgot>
      <HeadingReset>
        <TextForgot style={{ margin: '50px 0' }}>Reset Password</TextForgot>
      </HeadingReset>

      <FormSection data-testid="form-authentication-component">
        <FormWrapper>
          <InputLayout>
            <WrapperInput>
              <Input
                name="email"
                placeholder="New Password"
                type={hidePassword ? 'password' : 'text'}
                error={errors.email && 'Provide a valid Email Address.'}
                ariaLabel="email-address-input"
                onChange={onChange}
              />
              {!hidePassword && (
                <ImgEye src={eyeLogo} alt="eye" className="iconEye" onClick={() => setHidePassword(!hidePassword)} />
              )}
              {hidePassword && (
                <ImgEye src={eyeLogoOff} alt="eye" className="iconEye" onClick={() => setHidePassword(!hidePassword)} />
              )}
            </WrapperInput>
            <Separate></Separate>
            <WrapperInput>
              <Input
                name="email"
                placeholder="Confirm Password"
                type={confirmPassword ? 'password' : 'text'}
                error={errors.email && 'Provide a valid Email Address.'}
                ariaLabel="email-address-input"
                onChange={onChange}
              />
              {!confirmPassword && (
                <ImgEye
                  src={eyeLogo}
                  alt="eye"
                  className="iconEye"
                  onClick={() => setConfirmPassword(!confirmPassword)}
                />
              )}
              {confirmPassword && (
                <ImgEye
                  src={eyeLogoOff}
                  alt="eye"
                  className="iconEye"
                  onClick={() => setConfirmPassword(!confirmPassword)}
                />
              )}
            </WrapperInput>
          </InputLayout>
          <SubmitWrapper>
            <SubmitButton variant="primary" type="submit">
              Reset PassWord
            </SubmitButton>
          </SubmitWrapper>
        </FormWrapper>
      </FormSection>
    </WrapperForgot>
  );
};

export default ResetPassWord;
