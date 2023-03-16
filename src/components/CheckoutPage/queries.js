import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { GET_CART } from '@graphql/queries/cart';
import { Fragment } from 'react';
import console from '@utils/console';
import { CheckoutHeader, LoadingCartId } from './styles';

const CartQuery = ({ children, cartId, currency }) => {
  const { loading, error, data } = useQuery(GET_CART, {
    fetchPolicy: 'no-cache',
    variables: { cartId, currency },
  });

  // TODO: deal with loading and error
  if (loading) {
    return (
      <>
        <CheckoutHeader withMenu mobileTitle="Checkout" backText="Back" short />
        <LoadingCartId>Processing your request</LoadingCartId>
      </>
    );
  }

  if (error) {
    console.warn('Error while loading cart data');
    return <></>;
  }

  const queryData = get(data, 'cartById', {});

  return children({
    ...queryData,
  });
};

export { CartQuery };
