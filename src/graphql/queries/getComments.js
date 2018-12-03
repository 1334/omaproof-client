import gql from 'graphql-tag';

const GET_COMMENTS_QUERY = gql`
  query GetComments($id: String!) {
    getComments(where: { post: { id: $id } }) {
      id
      description
      user {
        name
        profilePicture
      }
      createdAt
    }
  }
`;

export default GET_COMMENTS_QUERY;
