import React from 'react';
import Post from './post';

export default class Posts extends React.Component {
  render() {
    const { posts, user } = this.props;

    return (
      <React.Fragment>
        {posts.map(post => (
          <Post key={post.id} post={post} user={user} />
        ))}
      </React.Fragment>
    );
  }
}
