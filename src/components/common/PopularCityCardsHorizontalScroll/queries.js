import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import console from '@utils/console';
import { GET_POPULAR_SPORTING_CITIES } from '../../../graphql/queries/cities';

const MostPopularSportingCitiesQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_POPULAR_SPORTING_CITIES);

  if (loading) {
    console.info('Loading Most Popular Sporting Cities');
  }

  if (error) {
    console.error(error, `Error fetching popularSportingCities`);
  }

  const queryData = get(data, 'popularSportingCities', {});

  return children(queryData);
};

export default MostPopularSportingCitiesQuery;
