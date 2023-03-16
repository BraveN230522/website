import gql from 'graphql-tag';

export const SEARCH_BY_TERM = gql`
  query searchByTerm($searchedTerm: String!, $useHotelIDs: Boolean!) {
    searchByTerm(searchTerm: $searchedTerm, useHotelIDs: $useHotelIDs) {
      resultID
      hotelSearchCityId
      resultText
      type
      subType
      date
      venue
    }
  }
`;

export const SEARCH_PRODUCTS = gql`
  query searchProducts(
    $vendor: String
    $query: String
    $offset: String
    $limit: Int
    $hotelID: String
    $qualifiers: String
    $from: String
    $to: String
  ) {
    searchProducts(
      vendor: $vendor
      query: $query
      offset: $offset
      limit: $limit
      hotelID: $hotelID
      qualifiers: $qualifiers
      from: $from
      to: $to
    ) {
      id
      hotelID
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
