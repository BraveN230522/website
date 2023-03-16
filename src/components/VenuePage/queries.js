import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { GET_VENUE_DETAILS } from '@graphql/queries/venues';
import console from '@utils/console';
import { GET_NEWS } from '../../graphql/queries/news';

const VenueQuery = ({ children, venueId, fromDate }) => {
  const { loading, error, data } = useQuery(GET_VENUE_DETAILS, {
    variables: { id: venueId, fromDate: fromDate || '' },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error('error');
  }

  const queryData = get(data, 'venueByIdFromDate', {});

  return children({
    ...queryData,
  });
};

const VenueNewsQuery = ({ children, interestId, interestType }) => {
  const { loading, error, data } = useQuery(GET_NEWS, {
    variables: { interestId, interestType },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error on league news');
  }

  const queryData = get(data, 'getNews', []);

  return children(queryData);
};

export { VenueQuery, VenueNewsQuery };
