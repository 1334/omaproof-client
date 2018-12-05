import gql from 'graphql-tag';

const GRAND_PARENT_LOGIN_MUTATION = gql`
  mutation GrandParent(
    $sessionToken: String
    $selected: [String]
    $unselected: [String]
    $type: String
  ) {
    grandParentLogin(
      sessionToken: $sessionToken
      answer: { type: $type, selected: $selected, unselected: $unselected }
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
