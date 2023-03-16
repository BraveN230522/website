import gql from 'graphql-tag';

export const GET_NEWS = gql`
  query getNews($interestId: Int!, $interestType: String!) {
    getNews(interestId: $interestId, interestType: $interestType) {
      title
      imageAspect
      imageURL
      interestTagging {
        cityId
        homepage
        leagueId
        teamId
        venueId
      }
      id
      summary
      link
    }
  }
`;
