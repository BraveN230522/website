import React from 'react';

import Icon from '@components/common/Icon';

import {
  TotalPriceStyles,
  TotalPriceDetailsContainer,
  BookingFeeContainer,
  TotalPriceContainer,
  Span,
  TotalPriceText,
} from './styles';

const TotalPrice = ({ label, items = [], fee, showFeeInfo = true, total }) => {
  if (!items || !items.length) {
    return null;
  }

  const getItemsTotal = items => {
    return items.reduce(
      (
        acc,
        {
          quantity,
          product: {
            selectedVariant: {
              price: { amount },
            },
          },
        }
      ) => acc + quantity * amount,
      0
    );
  };

  return (
    <TotalPriceStyles>
      <TotalPriceDetailsContainer>
        <BookingFeeContainer>
          {fee && showFeeInfo && (
            <Span>
              {fee.annotation}
              <span>
                <Icon name="information" />
              </span>
            </Span>
          )}
          <TotalPriceText>{label}</TotalPriceText>
        </BookingFeeContainer>
        <TotalPriceContainer>
          {fee && showFeeInfo && (
            <Span>
              {fee.currency} ${parseFloat(fee.amount).toFixed(2)}
            </Span>
          )}
          <TotalPriceText light>
            {items[0].product.selectedVariant.price.currency} $
            {total ? total.amount.toFixed(2) : (parseFloat(fee ? fee.amount : 0) + getItemsTotal(items)).toFixed(2)}
            {/* {items[0].product.selectedVariant.price.currency} ${parseFloat(fee ? fee.runningTotal : 0).toFixed(2)} */}
          </TotalPriceText>
        </TotalPriceContainer>
      </TotalPriceDetailsContainer>
    </TotalPriceStyles>
  );
};

export default TotalPrice;
