import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { GET_PRODUCT_DATA_BY_EVENT } from '@graphql/queries/products';
import { GET_EVENT_BY_ID } from '@graphql/queries/events';
import console from '@utils/console';

const ProductDataQuery = ({ children, eventId, cartId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA_BY_EVENT, {
    variables: { eventId, cartId },
  });
  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }
  if (error) {
    console.error('error');
  }
  return children(data?.productDataByEventId || {});
};

const EventDetailsQuery = ({ children, eventId }) => {
  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { eventId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error('error');
  }

  const queryData = get(data, 'eventById', {});

  return children({
    ...queryData,
  });
};

export { ProductDataQuery, EventDetailsQuery };
