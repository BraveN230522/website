import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { GET_CITY, GET_CITY_DETAILS } from '@graphql/queries/cities';
import console from '@utils/console';

const CityQuery = ({ children, cityId }) => {
  const { loading, error, data } = useQuery(GET_CITY, {
    variables: { id: cityId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.log('Loading');
  }

  if (error) {
    console.error('error');
  }

  const queryData = get(data, 'cityById', {});

  return children({
    ...queryData,
  });
};

const CityDetailsQuery = ({ children, cityId, fromDate }) => {
  const { loading, error, data } = useQuery(GET_CITY_DETAILS, {
    variables: { id: cityId, fromDate: fromDate || '' },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.log('Loading');
  }

  if (error) {
    console.error('error');
  }

  const queryData = get(data, 'cityDetailsByIdFromDate', {});

  return children({
    ...queryData,
  });
};

export { CityQuery, CityDetailsQuery };
