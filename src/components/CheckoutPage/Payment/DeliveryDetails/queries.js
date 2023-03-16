import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { GET_COUNTRIES, GET_STATES } from '@graphql/queries/universal';
import console from '@utils/console';

const CountriesQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  // TODO: deal with loading and error
  if (loading) {
    console.log('Loading');
  }

  if (error) {
    console.log('error');
  }

  const queryData = get(data, 'listAllCountries', []);

  return children(queryData);
};

const StatesQuery = ({ children, country }) => {
  if (!country || !country.length) return children([]);

  const { loading, error, data } = useQuery(GET_STATES, {
    variables: { country },
  });

  if (error) {
    console.warn('error');
  }

  // TODO: deal with loading and error
  if (loading || error) {
    return children([]);
  }

  const queryData = get(data, 'listAllStates', []);

  return children(queryData);
};

export { CountriesQuery, StatesQuery };
