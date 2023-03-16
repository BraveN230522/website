import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';
import Loader from '@components/Loader';
import console from '@utils/console';
import { GET_TOP_SPORTING_HOTELS } from '../../graphql/queries/hotel';
import { GET_POPULAR_SPORTING_CITIES } from '../../graphql/queries/cities';

const TopSportingHotelsQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_TOP_SPORTING_HOTELS);

  // TODO: deal with loading and error
  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error, `Error fetching hotelsForBigSportingEvents`);
  }

  const queryData = get(data, 'hotelsForBigSportingEvents', []);

  return children(queryData);
};

export const MostPopularSportingCitiesQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_POPULAR_SPORTING_CITIES);

  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, `Error fetching popularSportingCities`);
  }

  const queryData = get(data, 'popularSportingCities', {});

  return children(queryData);
};

export default TopSportingHotelsQuery;
