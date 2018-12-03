import gql from 'graphql-tag';

const SELECT_GROUP = gql`
  mutation SelectGroup($id: String!, $token: String!) {
    selectGroup(id: $id, token: $token) {
      token
      group {
        id
      }
    }
  }
`;

export default SELECT_GROUP;
