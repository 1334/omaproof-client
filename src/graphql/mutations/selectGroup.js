import gql from 'graphql-tag';

const SELECT_GROUP = gql`
  mutation SelectGroup($id: String!) {
    selectGroup(id: $id) {
      token
      group {
        id
      }
    }
  }
`;

export default SELECT_GROUP;
