import gql from 'graphql-tag';

export const HOTEL_SEARCH_QUERY = gql`
  query hotelSearchQuery {
    hotelSearchQuery {
      id
      type
      name
      description
      localDateTime
      dateTimeStatus {
        dateFinal
        timeFinal
        notes
        startDateTime
        endDateTime
      }
      geo {
        city
        country {
          code
          name
        }
        tz
        pois {
          key
          units
          distance
          lat
          lng
        }
      }
      price {
        currency
        amount
        annotation
        error
        runningTotal
      }
      url
      urlType
      selectedVariant {
        id
        type
        name
        description
        price {
          currency
          amount
          annotation
          error
          runningTotal
        }
        url
        urlType
        attributes {
          additionalProp1
          additionalProp2
          additionalProp3
        }
      }
      variants {
        id
        type
        name
        description
        price {
          currency
          amount
          annotation
          error
          runningTotal
        }
        url
        urlType
        attributes {
          additionalProp1
          additionalProp2
          additionalProp3
        }
      }
      needs {
        dob
      }
      notes {
        title
        body
      }
      venueDetails {
        rating
        address {
          attn
          premise
          address1
          address2
          city
          state
          postCode
          country {
            code
            name
          }
          phone
          purposes
        }
        images {
          url
          caption
        }
        facilities
        ticks
      }
    }
  }
`;
