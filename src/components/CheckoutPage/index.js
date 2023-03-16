import React, { useContext, useState, useEffect } from 'react';
import { adopt } from 'react-adopt';

import CartContext from '@utils/cartContext';

import { CheckoutHeader, LoadingCartId } from './styles';
import { CartQuery } from './queries';

import CheckoutForm from './CheckoutForm';

const Data = adopt({
  cartData: ({ render, cartId, currency }) => (
    <CartQuery cartId={cartId} currency={currency}>
      {render}
    </CartQuery>
  ),
});

const Checkout = () => {
  const { state: cart } = useContext(CartContext);
  const storedQualifiers = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('qualifiers')) : undefined;
  const [qualifiers, setQualifiers] = useState(storedQualifiers);
  useEffect(() => {
    localStorage.setItem('qualifiers', JSON.stringify(qualifiers));
  }, qualifiers);
  const cartId = cart.id;
  const currency = cart.displayCurrency || 'AUD';

  if (!cartId) {
    return (
      <>
        <CheckoutHeader withMenu mobileTitle="Checkout" backText="Back" short />
        <LoadingCartId>Processing your selection</LoadingCartId>
      </>
    );
  }

  return (
    <Data cartId={cartId} currency={currency}>
      {({ cartData }) => (
        <CheckoutForm initialCartData={cartData} qualifiers={qualifiers} setQualifiers={setQualifiers} />
      )}
    </Data>
  );
};

export default Checkout;
