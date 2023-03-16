import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import console from '@utils/console';

const GET_NEARBY_EVENTS_BY_CITY = gql`
  query nearbyEventsByCityId($cityId: Int!) {
    nearbyEventsByCityId(cityId: $cityId) {
      eventDateTime
      eventID
      eventImage
      eventName
      venue {
        venueAddress
        venueID
        venueImage
        venueName
      }
      fromPrice {
        amount
        currencyId
      }
    }
  }
`;

const GET_EVENTS_NEAR_HOTEL = gql`
  query eventsNearHotel($hotelId: String!) {
    eventsNearHotel(hotelId: $hotelId) {
      eventDateTime
      eventID
      eventImage
      eventName
      fromPrice {
        amount
        currencyId
      }
      venue {
        venueName
      }
    }
  }
`;

export const NearbyEventsByCityQuery = ({ children, cityId }) => {
  const { loading, error, data } = useQuery(GET_NEARBY_EVENTS_BY_CITY, {
    variables: { cityId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error');
  }

  const nearbyCities = ((data && data.nearbyEventsByCityId) || []).sort(
    (a, b) => new Date(a.eventDateTime) - new Date(b.eventDateTime)
  );

  return children({
    nearbyCities,
  });
};

export const NearbyEventsByHotelQuery = ({ children, hotelId }) => {
  const { loading, error, data } = useQuery(GET_EVENTS_NEAR_HOTEL, {
    variables: { hotelId },
  });

  // TODO: deal with loading and error
  if (loading) {
    console.info('Loading');
  }

  if (error) {
    console.error(error, 'error');
  }

  const nearbyEvents = (data && data.eventsNearHotel) || [];

  return children({
    nearbyEvents,
  });
};

export default NearbyEventsByCityQuery;
