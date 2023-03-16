import styled from '@emotion/styled';

import Icon from '@components/common/Icon';
import Input from '@components/common/Form/Input';
import Checkbox from '@components/common/Form/Checkbox';
import CheckoutSection from '../../Common/CheckoutSection';

const PaymentSection = styled(CheckoutSection)`
  margin-bottom: 45px;

  article {
    display: block;
  }

  input:not([type='checkbox']),
  .StripeElement {
    border: 2px solid ${({ theme }) => theme.colors.nobel};
    border-radius: 25px;
    height: 45px;
    min-width: 171px;
    padding-left: 26px;
    padding-top: 10px;
    width: 100%;
  }

  ${({ theme }) =>
    theme.generateBreakpoint(
      768,
      `
        border-bottom: 2px solid ${theme.colors.stone};
        padding-bottom: 22px;
      `
    )};
`;

const CreditCardControlsContainer = styled.div`
  max-width: 349px;
  width: 100%;

  & > div:first-of-type > input {
    padding-top: 0;
  }

  ${({ theme }) => theme.media.phone`
      max-width: 100%;
    `};
`;

const CreditCardBrandContainer = styled.div`
  margin: 0 0 27px 9px;

  img {
    display: none;

    ${({ theme }) => theme.media.phone`
      display: block;
    `}
  }

  ${({ theme }) => theme.media.phone`
    margin: 0 0 24px 0;
    display: flex;
    justify-content: center;
  `}
`;

const CreditCardBrandContent = styled.div`
  display: flex;

  ${({ theme }) => theme.media.phone`
    align-self: center;
    flex-direction: column;
    transform: translateY(7px);
  `}
`;

const CreditCardBrand = styled(Icon)`
  margin-right: 20px;
  opacity: ${({ opacity }) => (!opacity ? 0.5 : 1)};

  ${({ theme }) => theme.media.phone`
    margin-bottom: 12px;
    margin-right: 40px;
  `}
`;

const CreditCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    display: block;

    ${({ theme }) => theme.media.phone`
      display: none;
    `}
  }
`;

const CustomElementInput = styled(Input)`
  width: unset;

  input {
    font-size: 16px;
    font-weight: 400;
    width: 100%;

    ::placeholder {
      color: ${({ theme }) => theme.colors.suvaGrey};
      opacity: 1;
    }
  }
`;

const CreditCardImage = styled.img`
  height: 191px;
  margin: auto 0;
  width: 304px;

  ${({ theme }) => theme.media.phone`
    height: 118px;
    width: 188px;
  `}
`;

const CheckoutElement = styled(Checkbox)`
  justify-content: center;

  ${({ theme }) => theme.media.phone`
    justify-content: flex-start;
  `}
`;

const ElementInlineForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;

  ${({ theme }) => theme.media.phone`
    display: block;

    & > div:first-of-type{
      margin-bottom: 16px;
    }
  `}
`;

const ElementContent = styled.div`
  margin-top: 16px;
`;

const LabelElement = styled.label`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.12px;
  margin-left: 9px;
`;

export {
  PaymentSection,
  CreditCardControlsContainer,
  CreditCardBrandContainer,
  CreditCardBrandContent,
  CreditCardBrand,
  CreditCardContainer,
  CustomElementInput,
  CreditCardImage,
  CheckoutElement,
  ElementInlineForm,
  ElementContent,
  LabelElement,
};
