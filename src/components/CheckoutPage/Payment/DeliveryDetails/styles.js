import styled from '@emotion/styled';

import chevronDown from '@public/svg/chevron-down.svg';

import Checkbox from '@components/common/Form/Checkbox';
import Input from '@components/common/Form/Input';
import Select from '@components/common/Form/Select';
import CheckoutSection from '../../Common/CheckoutSection';

const DeliveryDetailsForm = styled.form`
  margin-bottom: 104px;
`;

const DeliveryDetailsSection = styled(CheckoutSection)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.stone};
  margin-bottom: 26px;
  padding-bottom: 30px;

  article {
    display: block;

    fieldset:nth-of-type(1) > div > span {
      margin-right: 5px;
      text-align: right;
    }
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

const DeliveryDetailsFieldSet = styled.fieldset`
  border: none;
  margin: 0;
  margin-bottom: 21px;
  padding: 0;
  width: 100%;
`;

const DeliveryDetailsLegend = styled.legend`
  font-size: 21px;
  font-weight: ${({ bold }) => (bold ? 800 : 400)};
  line-height: 28px;
  letter-spacing: -0.14px;
  margin-bottom: 12px;
  padding: 0;

  ${({ theme }) => theme.media.phone`
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.11px;
  `}
`;

const DeliveryTypeContainer = styled.div`
  display: flex;
  justify-content: left;
  padding-left: 21px;

  ${({ theme }) => theme.media.phone`
    flex-direction: column;
    margin-bottom: 30px;
    padding-left: 0;
  `}
`;

const DeliveryDetailsText = styled.p`
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? 800 : 400)};
  line-height: 19px;
  letter-spacing: -0.09px;
  margin: 0;

  &:first-of-type {
    margin-bottom: 10px;
  }

  svg {
    cursor: pointer;
    margin-left: 29px;
    transform: scale(0.9);
  }
`;

const DeliveryTypeSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.12px;

  span {
    font-size: 16px;
    color: #333;
  }
`;

const DeliveryTypeInlineForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  ${({ theme }) => theme.media.phone`
    flex-wrap: wrap;
    justify-content: space-between;

    & > div:nth-of-type(2){
      order:1;
    }

    & > div:nth-of-type(4){
      order:1;
    }
  `}
`;

const DeliverySmallFieldsContainer = styled.div`
  max-width: 175px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.media.phone`
    min-width: 48%;

    &:first-of-type {
      margin-bottom: 16px;
    }
  `}

  ${({ theme }) =>
    theme.generateBreakpoint(
      400,
      `
       min-width: 100%;
      `
    )}
`;

const DeliveryLargeFieldsContainer = styled.div`
  max-width: 363px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.media.phone`
    min-width: 100%;

    &:first-of-type {
      margin-bottom: 16px;
    }
  `}
`;

const DeliveryCheckbox = styled(Checkbox)`
  ${({ hide }) => hide && `display: none;`}

  input {
    order: 1;
  }
`;

const DeliveryInput = styled(Input)`
  width: 100%;

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    font-size: 16px;
    letter-spacing: -0.13px;
    padding-left: 16px;
    width: 100%;

    ::placeholder {
      color: ${({ theme }) => theme.colors.suvaGrey};
      opacity: 1;
    }
  }
`;

const DeliverySelect = styled(Select)`
  background-image: url(${chevronDown});
  background-size: 26px 26px;
  border: 2px solid ${({ theme }) => theme.colors.nobel};
  color: ${({ theme }) => theme.colors.suvaGrey};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.13px;
  padding-left: 16px;
  padding-right: 26px;
`;

export {
  DeliveryDetailsForm,
  DeliveryDetailsSection,
  DeliveryDetailsFieldSet,
  DeliveryDetailsLegend,
  DeliveryTypeContainer,
  DeliveryDetailsText,
  DeliveryTypeSpan,
  DeliveryTypeInlineForm,
  DeliverySmallFieldsContainer,
  DeliveryLargeFieldsContainer,
  DeliveryCheckbox,
  DeliveryInput,
  DeliverySelect,
};
