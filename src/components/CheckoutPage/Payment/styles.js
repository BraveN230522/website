import styled from '@emotion/styled';

import Button from '@components/common/Form/Button';
import CheckoutSection from '../Common/CheckoutSection';

const PaymentForm = styled.form`
  margin-bottom: 104px;

  a {
    color: ${({ theme }) => theme.colors.swiamBlue};
  }
`;

const PaymentErrorText = styled.p`
  background: ${({ theme }) => theme.colors.error};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

const PaymentSection = styled(CheckoutSection)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.stone};
  margin-bottom: 26px;
  padding-bottom: 30px;

  article {
    display: block;
  }

  &:last-of-type {
    border: none;
    padding-bottom: 0;
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
        padding-bottom: 22px;
      `
    )};
`;

const PaymentInlineForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const getCommonButtonStyles = `
  font-weight: 500;
  width: 198px;
`;

const PaymentButtonBack = styled(Button)`
  ${getCommonButtonStyles};
  border: 2px solid ${({ theme }) => theme.colors.nobel};
  color: ${({ theme }) => theme.colors.suvaGrey};

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`;

const PaymentButtonContinue = styled(Button)`
  ${getCommonButtonStyles};

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
       margin: 0 12px;
       width: 100%;
      `
    )}
`;

export { PaymentForm, PaymentSection, PaymentInlineForm, PaymentButtonBack, PaymentErrorText, PaymentButtonContinue };
