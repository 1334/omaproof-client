import gql from 'graphql-tag';

const SELECT_GROUP = gql`
  mutation SelectGroup($groupId: String!) {
    selectGroup(groupId: $groupId) {
      token
      group {
        id
        posts {
          id
          createdAt
          contentType
          mediaUrl
          user {
            name
            profilePicture
          }
          comments {
            id
            description
            user {
              name
              profilePicture
            }
            createdAt
          }
        }
        users {
          contactNumber
        }
      }
    }
  }
`;

export default SELECT_GROUP;
