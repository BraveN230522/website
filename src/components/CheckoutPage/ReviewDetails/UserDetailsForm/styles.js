import styled from '@emotion/styled';

import Input from '@components/common/Form/Input';
import Button from '@components/common/Form/Button';
import CheckoutSection from '../../Common/CheckoutSection';

const UserDetailsStyles = styled(CheckoutSection)`
  article {
    display: block;
  }

  form > div:last-of-type {
    margin: 80px 0 104px;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 21px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.14px;
`;

const LinkLogin = styled.a`
  color: ${({ theme }) => theme.colors.swiamBlue};
  cursor: pointer;
`;

const UserDetailsInlineForm = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 10px);

    ${({ theme }) => theme.media.phone`
     width: 100%;
    `};
  }

  ${({ theme }) => theme.media.phone`
    display: block;

    input {
      margin-bottom: 16px;
    }
 `};
`;

const UserDetailsInput = styled(Input)`
  width: unset;

  input {
    font-size: 16px;
    letter-spacing: -0.13px;
    width: 100%;
    ::placeholder {
      color: ${({ theme }) => theme.colors.suvaGrey};
      opacity: 1;
    }
  }

  margin-bottom: 8px;
`;

const getCommonButtonStyles = `
  font-weight: 500;
  width: 198px;
`;

const UserDetailsButtonBack = styled(Button)`
  ${getCommonButtonStyles};
  border: 2px solid ${({ theme }) => theme.colors.nobel};
  color: ${({ theme }) => theme.colors.suvaGrey};

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`;

const UserDetailsButtonContinue = styled(Button)`
  ${getCommonButtonStyles};

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
       width: 100%;
      `
    )}
`;

export {
  UserDetailsStyles,
  Text,
  LinkLogin,
  UserDetailsInlineForm,
  UserDetailsInput,
  UserDetailsButtonBack,
  UserDetailsButtonContinue,
};
