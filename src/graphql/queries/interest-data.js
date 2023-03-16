import gql from 'graphql-tag';

export const GET_INTEREST_DATA = gql`
  query interestData($interestId: Int!, $interestType: String!) {
    interestData(interestId: $interestId, interestType: $interestType) {
      id
      imageURL
      imageAspect
      title
      postDate
      objectType
      blogpostID
      link
      blogpostSummary
      interestTagging {
        cityId
        homepage
        leagueId
        teamId
        venueId
      }
    }
  }
`;

export const GET_INTEREST_QUESTIONS = gql`
  query interestQuestions($interestId: Int!, $interestType: String!) {
    interestQuestions(interestId: $interestId, interestType: $interestType) {
      answers {
        answerID
        author
        text
        votes
      }
      cityId
      questionID
      questionTitle
      questionCategory
      venueId
      icon
    }
  }
`;
