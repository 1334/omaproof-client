import gql from 'graphql-tag';

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteComment($id: String!, $token: String!) {
    deleteComment(id: $id, token: $token) {
      id
    }
  }
`;

export default DELETE_COMMENT_MUTATION;
