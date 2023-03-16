import gql from 'graphql-tag';

export const HOTEL_DISPLAY = gql`
  query searchProducts(
    $vendor: String
    $query: String
    $hotelID: String
    $offset: String
    $limit: Int
    $qualifiers: String
    $from: String
    $to: String
  ) {
    searchProducts(
      vendor: $vendor
      query: $query
      hotelID: $hotelID
      offset: $offset
      limit: $limit
      qualifiers: $qualifiers
      from: $from
      to: $to
    ) {
      id
      name
      localDateTime
      url
      venueDetails {
        address {
          city
          state
          address1
          country {
            name
          }
        }
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
        images {
          url
          caption
        }
      }
    }
  }
`;
