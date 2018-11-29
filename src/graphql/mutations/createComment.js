import gql from 'graphql-tag';

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommnet($postId: String!, $description: String!) {
    createComment(
      postId: $postId
      content: { contentType: NO_MEDIA, description: $description }
    ) {
      id
    }
  }
`;

export default CREATE_COMMENT_MUTATION;
