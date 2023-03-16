import gql from 'graphql-tag';

export const GET_BOOKING_CONFIRMATION = gql`
  query cartById($cartId: String!, $currency: String!) {
    cartById(cartId: $cartId, currency: $currency) {
      id
      status
      publishedFxDate
      channel
      booking {
        tickets {
          id
          fullName
          email
        }
      }
      total {
        currency
        amount
        annotation
        error
        runningTotal
      }
      customerInfo {
        name
        email
      }
      splitTotal {
        withCommission {
          currency
          amount
          annotation
          error
          runningTotal
        }
        withoutCommission {
          currency
          amount
          annotation
          error
          runningTotal
        }
      }
      charges {
        currency
        amount
        annotation
        error
        runningTotal
      }
      displayCurrency
      lineItems {
        id
        status
        extInfo {
          extId
          extStatus
          extTicketId
          zdOrderStatus
          zdTicketInfo
        }
        shippingOptions {
          id
          title
          type
          price {
            currency
            amount
            annotation
            error
            runningTotal
          }
          country {
            code
            name
          }
          addInfo {
            type
            text
          }
          defaultMail
        }
        selectedShippingOption {
          id
          title
          type
          price {
            currency
            amount
            annotation
            error
            runningTotal
          }
          country {
            code
            name
          }
          addInfo {
            type
            text
          }
          defaultMail
        }
        product {
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
            lng
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
              fees
            }
          }
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
              fees
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
            }
            images {
              url
              caption
            }
          }
        }
        quantity
        shippingOptions {
          type
          id
          title
          price {
            currency
            amount
            annotation
            error
            runningTotal
          }
        }
        subTotal {
          currency
          amount
          annotation
          error
          runningTotal
        }
        statusLines {
          status
          message
          details
        }
        eventId
      }
      created
    }
  }
`;
