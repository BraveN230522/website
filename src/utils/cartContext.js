import React, { createContext, useReducer, useMemo, useEffect } from 'react';
import Cookie from 'js-cookie';
import { useLazyQuery } from '@apollo/react-hooks';

import { CREATE_CART_ID } from '@graphql/queries/cart';
import console from '@utils/console';

const CART_COOKIE_KEY = 'swiamCartData';

function parseCookie(str) {
  let object;
  try {
    object = JSON.parse(str);
  } catch (error) {
    console.error(error);
    return {};
  }
  return object;
}

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-cart-cookie':
      Cookie.set(CART_COOKIE_KEY, JSON.stringify(action.data));
      return { ...action.data };
    case 'remove-cart-cookie':
      Cookie.remove(CART_COOKIE_KEY);
      return { ...action.data };
    case 'update-cart':
      return { ...action.data };
    default:
      return state;
  }
};

let cachedCart = {};
export const getCartData = async () => {
  if (!cachedCart || cachedCart.id) {
    return cachedCart;
  }

  cachedCart = await parseCookie(Cookie.get(CART_COOKIE_KEY));
  return cachedCart;
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [createCartId] = useLazyQuery(CREATE_CART_ID, {
    onCompleted: ({ createCartId }) => {
      // clear qualifiers from localStorage
      localStorage.removeItem('qualifiers');
      dispatch({ type: 'set-cart-cookie', data: createCartId });
    },
  });

  useEffect(() => {
    if (!state.id) {
      const dispatchAsyncCart = async () => {
        const data = await getCartData();

        if (!!~[null, undefined].indexOf(data) || !data.id) {
          createCartId({
            variables: {},
          });
        } else {
          dispatch({ type: 'update-cart', data });
        }
      };
      dispatchAsyncCart();
    }
  }, [state]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContext;
