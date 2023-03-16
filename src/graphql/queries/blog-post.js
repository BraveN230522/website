import gql from 'graphql-tag';

export const GET_BLOG_POST = gql`
  query allBlogPosts {
    allBlogPosts {
      id
      summary
      title
      imageURL
      link
    }
  }
`;
