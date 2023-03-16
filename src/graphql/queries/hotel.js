import gql from 'graphql-tag';

export const GET_HOTELS = gql`
  query allHotels {
    allHotels {
      fromPrice {
        amount
      }
      hotelID
      hotelImage
      hotelName
      nearbyVenue {
        cityName
        country {
          countryID
        }
      }
      venueAddress
      venueImage
    }
  }
`;

export const GET_HOTEL_BY_ID = gql`
  query hotelData($hotelId: String!) {
    hotelData(hotelId: $hotelId) {
      fromPrice {
        amount
      }
      hotelID
      hotelImage
      hotelName
      nearbyVenue {
        city {
          cityName
          country {
            countryID
          }
        }
      }
      bestEventDescription
      bestVenueDescription
      address
      overview
      promoBanner
      rating
      images
      headlineImage
      geoCoordinates {
        latitude
        longitude
      }
      amenities
      nearestCityId
      rating
    }
  }
`;

export const GET_HOTEL_PRODUCT_BY_ID = gql`
  query hotelProductById($hotelId: String!, $qualifiers: String, $startDate: String, $endDate: String) {
    hotelProductById(hotelId: $hotelId, qualifiers: $qualifiers, startDate: $startDate, endDate: $endDate) {
      status
      message
      id
      type
      name
      description
      url
      price {
        amount
        annotation
      }
      variants {
        id
        type
        name
        description
        url
        urlType
        attributes {
          additionalProp1
          additionalProp2
          additionalProp3
          fees
        }
        price {
          currency
          amount
          annotation
          error
          runningTotal
        }
      }
      venueDetails {
        facilities {
          business
          area
          dining
          disabled
          property
          room
          family
          leisure
          other
        }
        address {
          address1
          city
          state
        }
        images {
          url
          caption
        }
        ticks {
          parking
          pool
          restaurants
          wifi
        }
      }
    }
  }
`;

export const GET_POPULAR_HOTELS = gql`
  query popularHotels {
    popularHotels {
      fromPrice {
        amount
      }
      hotelID
      hotelImage
      hotelName
      promoBanner
      nearbyVenue {
        venueName
      }
    }
  }
`;

export const GET_POPULAR_HOTELS_BY_CITY_ID = gql`
  query popularHotelsByCityId($cityId: Int!) {
    popularHotelsByCityId(cityId: $cityId) {
      fromPrice {
        amount
        currencyId
      }
      hotelID
      hotelImage
      hotelName
      promoBanner
    }
  }
`;

export const GET_TOP_SPORTING_HOTELS = gql`
  query {
    hotelsForBigSportingEvents {
      hotelID
      hotelName
      hotelImage
      bestEventDescription
      fromPrice {
        amount
        currencyId
      }
      promoBanner
    }
  }
`;

export const GET_HOTELS_CLOSE_TO_THE_GAME = gql`
  query hotelsNearTheGame($eventId: String!) {
    hotelsNearTheGame(eventId: $eventId) {
      hotelID
      hotelName
      hotelImage
      fromPrice {
        amount
        currencyId
      }
      promoBanner
    }
  }
`;
