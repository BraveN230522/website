import gql from 'graphql-tag';

export const ADD_SUBSCRIBE = gql`
  mutation AddSubscribe($email: String!, $fullName: String!) {
    addSubscribe(email: $email, fullName: $fullName) {
      email
      fullName
    }
  }
`;
