import gql from 'graphql-tag';

const CREATE_POST_MUTATION = gql`
  mutation CreatePost(
    $contentType: CONTENT_TYPE!
    $description: String!
    $mediaUrl: String!
  ) {
    createPost(
      content: {
        contentType: $contentType
        description: $description
        mediaUrl: $mediaUrl
      }
    ) {
      id
    }
  }
`;

export default CREATE_POST_MUTATION;
