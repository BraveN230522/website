import React, { useState } from 'react';

import VisaImg from '@images/credit-card.png';
import MasterCardImg from '@images/mastercard.jpg';
import Message from '@components/common/Form/Message';
import theme from '@utils/styles/theme';

import { CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';

import {
  PaymentSection,
  CreditCardControlsContainer,
  CreditCardBrandContainer,
  CreditCardContainer,
  CreditCardBrandContent,
  CreditCardBrand,
  CustomElementInput,
  CreditCardImage,
  // CheckoutElement,
  ElementInlineForm,
  ElementContent,
  LabelElement,
} from './styles';

const brandCreditCards = [{ brand: 'mastercard' }, { brand: 'visa' }];

const requiredField = 'This is a required field';

const options = {
  style: {
    base: {
      color: theme.colors.dark,
      fontSize: `16px`,
      letterSpacing: `-0.11px`,
      lineHeight: `25px`,
      '::placeholder': {
        color: theme.colors.suvaGrey,
        opacity: 1,
      },
    },
  },
};

const CreditCard = ({ errors, register, title }) => {
  const [activeBrand, setActiveBrand] = useState();
  const [errorCardNumber, setErrorCardNumber] = useState();
  const [errorCVC, setErrorCVC] = useState();

  const [errorExpirationDate, setErrorExpirationDate] = useState();

  const getBrandCardAndError = event => {
    if (event.error) {
      setErrorCardNumber(event.error.message);
    } else {
      setActiveBrand(event.brand);
      setErrorCardNumber(null);
    }
  };

  const renderCardImage = brand => {
    return brand === 'mastercard' ? (
      <CreditCardImage src={MasterCardImg} alt="Credit Card MasterCard" />
    ) : (
      <CreditCardImage src={VisaImg} alt="Credit Card Visa" />
    );
  };

  const getCardExpiryError = event =>
    event.error ? setErrorExpirationDate(event.error.message) : setErrorExpirationDate(null);

  const getCvcError = event => (event.error ? setErrorCVC(event.error.message) : setErrorCVC(null));

  return (
    <PaymentSection title={title}>
      <CreditCardBrandContainer>
        <CreditCardBrandContent>
          {brandCreditCards.map((item, index) => (
            <CreditCardBrand key={index} name={item.brand} opacity={activeBrand === item.brand} />
          ))}
        </CreditCardBrandContent>

        {renderCardImage(activeBrand)}
      </CreditCardBrandContainer>
      <CreditCardContainer>
        <CreditCardControlsContainer>
          <CustomElementInput
            id="card-holder"
            light
            label="Cardholder Name"
            name="cardholderName"
            type="text"
            placeholder="e.g. ANDREW MILLER"
            ref={register({ required: true })}
            error={errors.cardholderName && requiredField}
          />
          <ElementContent>
            <LabelElement>Card Number</LabelElement>
            <CardNumberElement options={options} onChange={getBrandCardAndError} />
            {errorCardNumber && <Message type="error">{errorCardNumber}</Message>}
          </ElementContent>
          <ElementInlineForm>
            <div>
              <LabelElement>Expiry Date</LabelElement>
              <CardExpiryElement options={options} onChange={getCardExpiryError} />
              {errorExpirationDate && <Message type="error">{errorExpirationDate}</Message>}
            </div>
            <div>
              <LabelElement>CVC</LabelElement>
              <CardCvcElement options={options} onChange={getCvcError} />
              {errorCVC && <Message type="error">{errorCVC}</Message>}
            </div>
          </ElementInlineForm>

          {/* <CheckoutElement id="future-purchases" label="Remember for future purchases" name="future-purchases" /> */}
        </CreditCardControlsContainer>

        {renderCardImage(activeBrand)}
      </CreditCardContainer>
    </PaymentSection>
  );
};

export default CreditCard;
