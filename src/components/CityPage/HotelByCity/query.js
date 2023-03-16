import { useQuery } from '@apollo/react-hooks';
import { GET_POPULAR_HOTELS_BY_CITY_ID } from '@graphql/queries/hotel';
import { get } from 'lodash';
import Loader from '@components/Loader';
import console from '@utils/console';

const HotelByCityQuery = ({ children, cityId }) => {
  const { loading, error, data } = useQuery(GET_POPULAR_HOTELS_BY_CITY_ID, {
    variables: { cityId },
  });

  if (loading) {
    return <Loader />;
  }

  if (error || !data.popularHotelsByCityId) {
    console.warn('Error while loading the popular hotels by city id:');
    console.error(error);
    return children({ popularHotelsByCityId: [] });
  }
  const queryData = get(data, 'popularHotelsByCityId', []);
  return children(queryData);
};

export default HotelByCityQuery;
