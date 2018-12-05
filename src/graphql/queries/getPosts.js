import gql from 'graphql-tag';

const GET_POSTS_QUERY = gql`
  query GetPosts($id: String!, $token: String!) {
    getPosts(
      token: $token
      where: { group: { id: $id } }
      orderBy: createdAt_DESC
    ) {
      id
      description
      createdAt
      contentType
      mediaUrl
      user {
        id
        name
        picture
      }
      comments {
        id
        description
        user {
          id
          name
          picture
        }
        createdAt
      }
    }
  }
`;

export default GET_POSTS_QUERY;
