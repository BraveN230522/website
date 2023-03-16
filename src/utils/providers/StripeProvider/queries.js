import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { GET_STRIPE_PUBLIC_KEY } from '@graphql/queries/stripe';
import console from '@utils/console';

const StripePublicKeyQuery = ({ children, currency, setPublicKey }) => {
  const { loading, error, data } = useQuery(GET_STRIPE_PUBLIC_KEY, {
    variables: { currency: currency || 'AUD' },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error('error');
  }

  const queryData = get(data, 'paymentPublicKey.publicKey', null);

  if (queryData && setPublicKey) {
    setPublicKey(queryData);
  }

  return children({
    ...queryData,
  });
};

export { StripePublicKeyQuery };
