import gql from 'graphql-tag';

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommnet(
    $postId: String!
    $description: String!
    $token: String!
  ) {
    createComment(
      postId: $postId
      content: { contentType: NO_MEDIA, description: $description }
      token: $token
    ) {
      id
    }
  }
`;

export default CREATE_COMMENT_MUTATION;
