import gql from 'graphql-tag';

export const GET_CAROUSEL = gql`
  query allCarousels {
    allCarousels {
      carouselItemID
      description
      imageURL
      mobileImageURL
      title
    }
  }
`;
