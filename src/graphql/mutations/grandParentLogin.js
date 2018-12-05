import gql from 'graphql-tag';

const GRAND_PARENT_LOGIN_MUTATION = gql`
  mutation GrandParent(
    $sessionToken: String
    $selected: [String]
    $unselected: [String]
  ) {
    grandParentLogin(
      sessionToken: $sessionToken
      answers: { selected: $selected, unselected: $unselected }
    ) {
      token
      question {
        options
        type
      }
    }
  }
`;

export default GRAND_PARENT_LOGIN_MUTATION;
