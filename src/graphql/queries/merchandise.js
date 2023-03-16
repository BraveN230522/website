import gql from 'graphql-tag';

export const GET_MERCHANDISE_BY_EVENT_ID = gql`
  query merchandiseByEventId($eventId: String!) {
    merchandiseByEventId(eventId: $eventId) {
      description
      merchandiseId
      merchandiseImageUrl
      price {
        amount
        currencyId
      }
      purchaseUrl
      team {
        logoURL
        photoURL
        sport {
          sportCardImage
          sportID
          sportIconURL
          sportIconURLV4
          sportName
        }
        teamDescription
        teamID
        teamName
      }
    }
  }
`;
