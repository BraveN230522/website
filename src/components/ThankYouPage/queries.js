import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import { GET_BOOKING_CONFIRMATION } from '@graphql/queries/booking';
import { GET_LEAGUE_INFO } from '@graphql/queries/league';
import { GET_MERCHANDISE_BY_EVENT_ID } from '@graphql/queries/merchandise';
import { GET_EVENT_BY_ID, GET_EVENTS_NEARBY_CITY_ID } from '@graphql/queries/events';
import console from '@utils/console';

const BookingQuery = ({ children, cartId, currency }) => {
  const { loading, error, data } = useQuery(GET_BOOKING_CONFIRMATION, {
    variables: { cartId, currency },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error('error in BookingQuery', error);
  }

  const queryData = get(data, 'cartById', {});

  return children({
    ...queryData,
  });
};

const EventQuery = ({ children, eventId }) => {
  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { eventId },
  });

  // TODO: deal with loading and error
  if (loading) console.info('Loading');
  if (error) console.error('error in EventQuery', error);

  const queryData = get(data, 'eventById', {});

  return children({
    ...queryData,
  });
};

const LeagueInfoQuery = ({ children, leagueId }) => {
  const { loading, error, data } = useQuery(GET_LEAGUE_INFO, {
    variables: { leagueId },
  });

  // TODO: deal with loading and error
  if (loading) console.info('Loading');
  if (error) console.error('error in LeagueInfoQuery', error);

  const queryData = get(data, 'leagueInfo', {});

  return children({
    ...queryData,
  });
};

const MerchandiseQuery = ({ children, eventId }) => {
  const { loading, error, data } = useQuery(GET_MERCHANDISE_BY_EVENT_ID, {
    variables: { eventId },
  });

  // TODO: deal with loading & error
  if (loading) console.info('Loading');
  if (error) console.error('error in MerchandiseQuery', error);

  const queryData = get(data, 'merchandiseByEventId', []) || [];

  console.log('API MERCH', queryData);

  return children(queryData);
};

const EventsNearbyCityQuery = ({ children, cityId }) => {
  const { loading, error, data } = useQuery(GET_EVENTS_NEARBY_CITY_ID, {
    variables: { cityId },
  });

  if (loading) console.info('Loading');
  if (error) console.error(`error in EventsNearbyCityQuery cityId:${cityId}`, error);

  const queryData = get(data, 'nearbyEventsByCityId', []);

  return children(queryData);
};

export { BookingQuery, EventQuery, MerchandiseQuery, LeagueInfoQuery, EventsNearbyCityQuery };
