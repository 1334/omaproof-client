import gql from 'graphql-tag';

const CREATE_POST_MUTATION = gql`
  mutation CreatePost(
    $contentType: CONTENT_TYPE!
    $description: String!
    $mediaUrl: String!
    $token: String!
  ) {
    createPost(
      content: {
        contentType: $contentType
        description: $description
        mediaUrl: $mediaUrl
      }
      token: $token
    ) {
      id
    }
  }
`;

export default CREATE_POST_MUTATION;
