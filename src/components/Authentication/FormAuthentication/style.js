import styled from '@emotion/styled';
import React from 'react';

import Button from '@components/common/Form/Button';

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  div {
    width: ${({ isRegistering }) => (isRegistering ? 'calc(50% - 4px)' : '100%')};
  }

  ${({ theme }) => theme.media.phone`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
   div {
        width: 100%;
      }
    }
`};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  ${({ isEmail }) => (isEmail ? 'width: 100% !important' : '')}
`;

const InputField = styled.input`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  outline: none;

  padding: 12px 24px;
  margin: 0;
  margin-bottom: 10px;

  border: 2px solid ${({ theme }) => theme.colors.browGray};
  box-sizing: border-box;
  border-radius: 30px;

  ${({ theme }) => theme.media.phone`
    border-width: 1px;
    box-sizing: border-box;
    border-radius: 25px;
  `};
`;

const ErrorMessage = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  margin-bottom: -5px;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.error};
`;

const UserName = styled.p`
  font-size: 1.4rem;
`;

const Input = ({ name, placeholder, type, register, error, ariaLabel, onChange }) => {
  return (
    <InputWrapper isEmail={name === 'email'}>
      <InputField
        name={name}
        placeholder={placeholder}
        type={type}
        ref={register}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

const SectionTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.Inter}
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;

  height: 16px;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.black};

`;

const SubmitWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 24px;
  ${({ theme }) => theme.media.phone`
      padding-top: 20%;
  `};
`;

const SubmitButton = styled(Button)`
  width: 42%;

  ${({ theme }) => theme.media.phone`
      width: 100%;
  `};
`;

const WrapperButton = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;

const StyleForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: #2891ff;
`;

export {
  FormSection,
  UserName,
  FormWrapper,
  SectionTitle,
  InputLayout,
  Input,
  SubmitWrapper,
  SubmitButton,
  ErrorMessage,
  WrapperButton,
  StyleForgotPassword,
};
