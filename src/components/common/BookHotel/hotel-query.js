import { useQuery } from '@apollo/react-hooks';
import { GET_POPULAR_HOTELS } from '@graphql/queries/hotel';
import { get } from 'lodash';
import Loader from '@components/Loader';

const HotelQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_POPULAR_HOTELS);

  if (loading) {
    return <Loader />;
  }

  if (error || !data.popularHotels) {
    console.warn('Error while loading the popular hotels data:');
    console.error(error);
    return children({ popularHotels: [] });
  }
  const queryData = get(data, 'popularHotels', []);
  return children(queryData);
};

export { HotelQuery };
