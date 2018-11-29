import gql from 'graphql-tag';

const GET_POSTS_QUERY = gql`
  query GetPosts($id: String!) {
    getPosts(where: { group: { id: $id } }) {
      createdAt
      contentType
      mediaUrl
      user {
        name
        profilePicture
      }
      comments {
        id
        description
        user {
          name
          profilePicture
        }
        createdAt
      }
    }
  }
`;

export default GET_POSTS_QUERY;
