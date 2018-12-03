import gql from 'graphql-tag';

const DELETE_POST_MUTATION = gql`
  mutation DeletePost($id: String!, $token: String!) {
    deletePost(id: $id, token: $token) {
      id
    }
  }
`;

export default DELETE_POST_MUTATION;
