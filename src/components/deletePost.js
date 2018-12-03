import React from 'react';
import { Mutation } from 'react-apollo';

import DELETE_POST_MUTATION from '../graphql/mutations/deletePost';
import GET_POSTS_QUERY from '../graphql/queries/getPosts';

class DeletePost extends React.Component {
  render() {
    const { post, user } = this.props;

    return (
      <Mutation
        mutation={DELETE_POST_MUTATION}
        variables={{
          id: post.id,
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
            DELETE IT!!!
          </a>
        )}
      </Mutation>
    );
  }
}

export default DeletePost;
