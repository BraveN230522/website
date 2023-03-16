import gql from 'graphql-tag';

export const LOGIN_WITH_USER_NAME = gql`
  query loginWithUserName($username: String!, $password: String!) {
    loginWithUserName(username: $username, password: $password) {
      email
      username
      userToken
      firstName
      surname
      wpid
    }
  }
`;

export const LOGIN_WITH_FACEBOOK = gql`
  query loginWithFacebook($email: String!, $accessToken: String!) {
    loginWithFacebook(email: $email, accessToken: $accessToken) {
      email
      username
      userToken
      firstName
      surname
      wpid
    }
  }
`;

export const LOGIN_WITH_GOOGLE = gql`
  query loginWithGoogle($email: String!, $idToken: String!) {
    loginWithGoogle(email: $email, idToken: $idToken) {
      email
      username
      userToken
      firstName
      surname
    }
  }
`;
