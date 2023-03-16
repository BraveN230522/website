import gql from 'graphql-tag';

export const ME = gql`
  query me {
    me {
      email
      firstName
      surname
      wpid
    }
  }
`;

export const UPCOMMING_EVENTS = gql`
  query upComingEvents($token: String!) {
    upComingEvents(token: $token) {
      lineItems {
        product {
          name
          geo {
            city
          }
          localDateTime
        }
      }
    }
  }
`;

export const REGISTER_USER = gql`
  query register($email: String!, $password: String!, $firstName: String!, $surname: String!) {
    register(email: $email, password: $password, firstName: $firstName, surname: $surname) {
      email
      username
      userToken
      firstName
      surname
      wpid
    }
  }
`;
