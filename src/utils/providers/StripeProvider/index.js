import React, { useEffect, useState } from 'react';
import { adopt } from 'react-adopt';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import theme from '@utils/styles/theme';
import { StripePublicKeyQuery } from './queries';

const Data = adopt({
  stripePublicKey: ({ render, currency, setPublicKey }) => (
    <StripePublicKeyQuery currency={currency} setPublicKey={setPublicKey}>
      {render}
    </StripePublicKeyQuery>
  ),
});

const StripeProvider = ({ children, currency }) => {
  const [stripePublicKey, setPublicKey] = useState();
  const [stripe, setStripe] = useState(null);

  const getStripe = async () => {
    const stripeInstance = await loadStripe(stripePublicKey);
    setStripe(stripeInstance);
  };

  useEffect(() => {
    if (stripePublicKey) {
      getStripe();
    }
  }, [stripePublicKey]);

  return (
    <Data currency={currency} setPublicKey={setPublicKey}>
      {() => {
        return (
          <Elements stripe={stripe} fonts={theme.stripe.fonts}>
            {children}
          </Elements>
        );
      }}
    </Data>
  );
};

export default StripeProvider;
