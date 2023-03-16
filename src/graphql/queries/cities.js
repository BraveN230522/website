import gql from 'graphql-tag';

export const GET_CITIES = gql`
  query allCities {
    allCities {
      id
      image
      name
      city
      state
      price
      date
    }
  }
`;

export const GET_TOP_CITIES = gql`
  query topCities {
    topCities {
      cityId
      cityName
      country {
        countryId
        countryName
      }
      cityOverview
      imageURL
    }
  }
`;

export const GET_CITY = gql`
  query cityById($id: ID!) {
    cityById(id: $id) {
      city {
        cityId
        cityName
        cityOverview
        imageURL
      }
      events {
        eventId
        eventName
        headline
        buyTicketsURL
        eventImage
        leagueId
        venue {
          venueName
          venueAddress
          venueImage
          coOrdinates {
            latitude
            longitude
          }
          city {
            cityName
          }
        }
        venueId
        leagueId
        dateTime
        dateTimeStamp
        priceFrom
      }
      venues {
        venueId
        venueAddress
        venueImage
        venueName
        venueOverview
        coOrdinates {
          latitude
          longitude
        }
        city {
          cityName
        }
      }
    }
  }
`;

export const GET_CITY_DETAILS = gql`
  query cityDetailsByIdFromDate($id: ID!, $fromDate: String!) {
    cityDetailsByIdFromDate(id: $id, fromDate: $fromDate) {
      events {
        eventId
        headline
        buyTicketsURL
        venue {
          venueName
          venueAddress
          venueImage
          coOrdinates {
            latitude
            longitude
          }
        }
        venueId
        leagueId
        dateTime
        priceFrom
      }
    }
  }
`;

export const GET_POPULAR_SPORTING_CITIES = gql`
  query {
    popularSportingCities {
      cityId
      cityName
      imageURL
      country {
        countryName
      }
    }
  }
`;
