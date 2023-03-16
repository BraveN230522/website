import gql from 'graphql-tag';

export const GET_VENUE_DETAILS = gql`
  query venueDetailsByIdFromDate($id: ID!, $fromDate: String!) {
    venueByIdFromDate(id: $id, fromDate: $fromDate) {
      venue {
        venueImage
        venueId
        venueName
        venueAddress
        coOrdinates {
          latitude
          longitude
        }
        venueOverview
        city {
          cityName
          cityId
        }
      }
      events {
        eventId
        eventName
        headline
        leagueId
        eventImage
        dateTime
        dateTimeStamp
        priceFrom
        buyTicketsURL
        sportIcon
        venue {
          venueName
          city {
            cityName
          }
        }
      }
    }
  }
`;

export const GET_VENUE_IMPORTANT_INFORMATION = gql`
  query venueImportantInformationById($id: ID!) {
    venueImportantInformationById(id: $id) {
      infoId
      venueId
      label
      information
      version
    }
  }
`;
