import { useQuery } from '@apollo/react-hooks';
// import { GET_POPULAR_HOTELS_BY_CITY_ID } from '@graphql/queries/hotel';
import { GET_TOP_SPORTING_HOTELS, GET_HOTELS_CLOSE_TO_THE_GAME } from '@graphql/queries/hotel';
import { get } from 'lodash';
// import Loader from '@components/Loader';
import console from '@utils/console';

const BIG_EVENTS = 'bigevents';
const CLOSE_TO_GAME = 'closetogame';

const HotelsForBigEventsQuery = ({ children }) => {
  const { loading, error, data } = useQuery(GET_TOP_SPORTING_HOTELS);

  if (loading) {
    return children({ hotels: [] });
  }

  if (error) {
    console.error('error: ', error);
    return children({ hotels: [] });
  }

  const queryData = get(data, 'hotelsForBigSportingEvents', []);

  return children(queryData);
};

const HotelsCloseToGameQuery = ({ children, eventId }) => {
  const { loading, error, data } = useQuery(GET_HOTELS_CLOSE_TO_THE_GAME, {
    variables: { eventId },
  });

  if (loading) {
    return children([]);
  }

  if (error) {
    console.error('error: ', error);
    return children([]);
  }

  const queryData = get(data, 'hotelsNearTheGame', []);

  return children(queryData);
};

export { HotelsForBigEventsQuery, HotelsCloseToGameQuery, BIG_EVENTS, CLOSE_TO_GAME };
