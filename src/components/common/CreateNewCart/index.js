import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import CartContext from '@utils/cartContext';

import { CREATE_CART_ID } from '@graphql/queries/cart';
import { useLazyQuery } from '@apollo/react-hooks';

export const CreateNewCart = () => {
  const { dispatch } = useContext(CartContext);
  const router = useRouter();

  const handleError = err => {
    console.error('ERROR CLEARING CART', err);
  };

  const [createCartId] = useLazyQuery(CREATE_CART_ID, {
    onCompleted: ({ createCartIdData }) => {
      dispatch({ type: 'set-cart-cookie', data: createCartIdData });
      // clear qualifiers from localStorage
      localStorage.removeItem('qualifiers');
      dispatch({ type: 'set-cart-cookie', data: createCartId });
    },
    onError: handleError,
  });

  // Create a new cart
  useEffect(() => {
    if (!sessionStorage?.cartSession || JSON.parse(sessionStorage?.cartSession)?.cart !== 1) {
      // createCartId();
      localStorage.removeItem('qualifiers');
      dispatch({ type: 'remove-cart-cookie', data: {} });
      const cartSession = { cart: 1 };
      sessionStorage.setItem('cartSession', JSON.stringify(cartSession));
    }
  }, []);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (window.location.pathname !== '/') {
        alert('Unfortunately your session has expired. Press OK to return to our homepage to search again.');
        window.location.href = '/';
      }
      if (window.location.pathname === '/') {
        alert('Unfortunately your session has expired. Press OK to search again.');
        router.reload();
      }
      createCartId();
    }, 60 * 60 * 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  return null;
};
