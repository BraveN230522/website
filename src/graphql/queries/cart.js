import gql from 'graphql-tag';

export const SET_CUSTOMER_INFO = gql`
  query customerInfo(
    $cartId: String!
    $firstName: String!
    $lastName: String!
    $ticketingEmail: String!
    $phone: String!
  ) {
    customerInfo(
      cartId: $cartId
      firstName: $firstName
      lastName: $lastName
      ticketingEmail: $ticketingEmail
      phone: $phone
    ) {
      email
      phone
      ticketingEmail
      firstnames
      surname
    }
  }
`;

export const SET_CART_PROMO_CODES = gql`
  query promoCodes($cartId: String!, $promoCodes: [String]!) {
    promoCodes(cartId: $cartId, promoCodes: $promoCodes) {
      id
      status
      publishedFxDate
      channel
      promoCodes
      total {
        currency
        amount
        annotation
        error
        runningTotal
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
      }
      created
    }
  }
`;

export const SET_HOTEL_CUSTOMER_INFO = gql`
  query setHotelCustomerInfo($cartId: String!, $lineItemId: String!, $guestDetails: String!) {
    setHotelCustomerInfo(cartId: $cartId, lineItemId: $lineItemId, guestDetails: $guestDetails) {
      id
      lineItems {
        customerInfo {
          name
          type
          more {
            name
            type
          }
        }
      }
    }
  }
`;

export const CREATE_CART_ID = gql`
  query createCartId {
    createCartId {
      id
      status
    }
  }
`;

export const GET_CART = gql`
  query cartById($cartId: String!, $currency: String!) {
    cartById(cartId: $cartId, currency: $currency) {
      id
      status
      publishedFxDate
      channel
      promoCodes
      total {
        currency
        amount
        annotation
        error
        runningTotal
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
        eventData {
          eventid
          headline
          dateTime
          teamA
          cityid
          teamB
          venue {
            venueName
            venueImage
          }
          cityData {
            name
          }
          moreEventData {
            eventImage
          }
          league {
            cardImageURL
            sport {
              sportIconURL
            }
          }
        }
      }
      created
    }
  }
`;

export const ADD_PRODUCT_ON_CART = gql`
  query addProductOnCart(
    $cartId: String!
    $productId: String!
    $variantId: String!
    $quantity: Int!
    $currency: String!
  ) {
    addProductOnCart(
      cartId: $cartId
      productId: $productId
      variantId: $variantId
      quantity: $quantity
      currency: $currency
    ) {
      id
    }
  }
`;

export const REMOVE_PRODUCT_FROM_CART = gql`
  query removeProductFromCart($cartId: String!, $lineItemId: String!) {
    removeProductFromCart(cartId: $cartId, lineItemId: $lineItemId) {
      id
      status
      publishedFxDate
      channel
      promoCodes
      total {
        currency
        amount
        annotation
        error
        runningTotal
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
      }
      created
    }
  }
`;
