import gql from 'graphql-tag';

export const GET_PRODUCT_ID_BY_EVENT = gql`
  query Product($eventId: String!, $cartId: String) {
    productIdByEventId(eventId: $eventId, cartId: $cartId) {
      value
    }
  }
`;

export const GET_PRODUCT_DATA_BY_EVENT = gql`
  query EventProduct($eventId: String!, $cartId: String) {
    productDataByEventId(eventId: $eventId, cartId: $cartId) {
      id
      status
      message
      type
      name
      description
      localDateTime
      geo {
        city
        country {
          code
          name
        }
      }
      price {
        currency
        amount
        annotation
      }
      url
      urlType
      variants {
        id
        ticket
        name
        description
        price {
          currency
          amount
          annotation
        }
        attributes {
          inventory
          groupType
          deliveryOpts
          lowHighSeats
          row
          section
          splits
          live
          notes
          rdo
        }
      }
    }
  }
`;
