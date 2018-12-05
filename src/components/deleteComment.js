import React from 'react';
import { Mutation } from 'react-apollo';

import DELETE_COMMENT_MUTATION from '../graphql/mutations/deleteComment';
import GET_POSTS_QUERY from '../graphql/queries/getPosts';

class DeleteComment extends React.Component {
  render() {
    const { comment, user } = this.props;

    return (
      <Mutation
        mutation={DELETE_COMMENT_MUTATION}
        variables={{
          id: comment.id,
          token: user.groupToken
        }}
        refetchQueries={[
          {
            query: GET_POSTS_QUERY,
            variables: { id: user.activeGroup, token: user.groupToken }
          }
        ]}
      >
        {deletePost => (
          <a
            href="/delete"
            onClick={e => {
              e.preventDefault();
              const response = window.confirm('Are you sure?');
              response && deletePost();
            }}
          >
            <span className="icon-trash" style={{ fontSize: 1 + 'rem' }} />
          </a>
        )}
      </Mutation>
    );
  }
}

export default DeleteComment;
