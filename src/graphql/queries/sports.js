import gql from 'graphql-tag';

export const GET_SPORTS = gql`
  query allSports {
    allSports {
      sportID
      sportIconURL
      sportIconURLV4
      sportName
    }
  }
`;
