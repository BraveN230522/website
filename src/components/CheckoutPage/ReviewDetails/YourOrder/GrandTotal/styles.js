import styled from '@emotion/styled';

import Input from '@components/common/Form/Input';
import Button from '@components/common/Form/Button';

const PromoContainer = styled.div``;
const PromoCodeError = styled.div`
  text-align: right;
`;

const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  label,
  span {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  label {
    text-align: left;
  }
  span {
    text-align: right;
  }
  i {
    cursor: pointer;
  }
`;

const PromoCodeContainer = styled.div`
  text-align: right;
  label,
  input {
    display: inline-block;
    margin-right: 5px;
  }
`;

const PromoCodeInput = styled(Input)`
  width: unset;
  display: inline-block;
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
  margin-right: 5px;
`;

const getCommonButtonStyles = `
  font-weight: 500;
  width: 198px;
`;

const PromoCodeButton = styled(Button)`
  ${getCommonButtonStyles};

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
     width: 100%;
    `
    )}
`;

export { PromoContainer, DiscountContainer, PromoCodeContainer, PromoCodeError, PromoCodeInput, PromoCodeButton };
