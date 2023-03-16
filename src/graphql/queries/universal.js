import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
  query listAllCountries {
    listAllCountries {
      country_name
    }
  }
`;

export const GET_STATES = gql`
  query listAllStates($country: String!) {
    listAllStates(country: $country) {
      state_name
    }
  }
`;
