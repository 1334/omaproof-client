import gql from 'graphql-tag';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser(
    $name: String!
    $picture: String!
    $monthOfBirth: String!
    $yearOfBirth: String!
    $contactNumber: String!
    $generation: GENERATION_TYPE!
  ) {
    createUser(
      data: {
        name: $name
        picture: $picture
        monthOfBirth: $monthOfBirth
        yearOfBirth: $yearOfBirth
        contactNumber: $contactNumber
        generation: $generation
      }
    ) {
      token
      user {
        id
        name
        picture
        groups {
          id
          description
        }
      }
    }
  }
`;

export default CREATE_USER_MUTATION;
