import React, { createRef, useState } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import {
  PromoContainer,
  DiscountContainer,
  PromoCodeContainer,
  PromoCodeError,
  PromoCodeInput,
  PromoCodeButton,
} from './styles';
import { EticketIcon } from '../Eticket/styles';

export default function DiscountSection({
  label,
  setPromoCodes,
  promoCodes,
  discounts,
  cartId,
  promoCodeError,
  isOrderTotal,
}) {
  const promoCodeInput = createRef();

  const [valueInputTotal, setValueInputTotal] = useState('');
  const handleGrandTotal = e => {
    setValueInputTotal(e.target.value);
  };

  const addCode = e => {
    // as with the API the following is for future support of multiple codes
    // setPromoCodes([...codes, promoCodeInput.current.value]);
    // until the above is supported by the API use:
    setPromoCodes({
      variables: {
        cartId,
        promoCodes: [promoCodeInput.current.value],
      },
    });
  };
  const removeCode = e => {
    // as with the API the following is for future support of multiple codes
    // setPromoCodes([...codes, promoCodeInput.current.value]);
    // until the above is supported by the API use:
    // setPromoCodes({
    //   variables: {
    //     cartId,
    //     promoCodes: [],
    //   },
    // });
    console.log(promoCodes);
  };
  return (
    <PromoContainer>
      {!isOrderTotal && (
        <PromoCodeContainer>
          <label>Promo code</label>
          <PromoCodeInput
            type="text"
            light
            placeholder="Enter code"
            ref={promoCodeInput}
            value={valueInputTotal}
            onChange={handleGrandTotal}
          />
          <PromoCodeButton onClick={addCode} disabled={!valueInputTotal}>
            Apply
          </PromoCodeButton>
        </PromoCodeContainer>
      )}
      {promoCodeError && <PromoCodeError>{promoCodeError}</PromoCodeError>}
      {discounts?.map(discount => (
        <DiscountContainer key={discount}>
          <label>{label}</label>
          <span>
            {discount.annotation} - {discount.currency} {getSymbolFromCurrency(discount.currency)}
            {discount.amount}
          </span>
          <i onClick={removeCode}>
            <EticketIcon name="close" />
          </i>
        </DiscountContainer>
      ))}
    </PromoContainer>
  );
}
