import gql from 'graphql-tag';

const CREATE_GROUP_MUTATION = gql`
  mutation CreateGroup(
    $welcomeText: String!
    $description: String!
    $token: String!
    $members: [UserCreation!]!
    $grandChildren: [UserCreation!]!
  ) {
    createGroup(
      data: { welcomeText: $welcomeText, description: $description }
      members: $members
      grandChildren: $grandChildren
      token: $token
    ) {
      token
      group {
        id
      }
    }
  }
`;

export default CREATE_GROUP_MUTATION;
