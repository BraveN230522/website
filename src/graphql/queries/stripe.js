import gql from 'graphql-tag';

export const GET_STRIPE_PUBLIC_KEY = gql`
  query paymentPublicKey($currency: String!) {
    paymentPublicKey(currency: $currency) {
      publicKey
      currency
      gateway
    }
  }
`;

// TODO: update this query response
// when we know how the api response looks like
export const PAY_NOW_QUERY = gql`
  query payNow(
    $email: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $cartId: String!
    $currency: String!
    $amount: Float!
    $transactionToken: String!
    $lineItems: String!
    $typeTickets: [String]!
    $deliveryAdress: String!
    $cardholderName: String!
  ) {
    payNow(
      email: $email
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      cartId: $cartId
      currency: $currency
      amount: $amount
      transactionToken: $transactionToken
      lineItems: $lineItems
      deliveryAdress: $deliveryAdress
      cardholderName: $cardholderName
      typeTickets: $typeTickets
    ) {
      id
      status
    }
  }
`;
