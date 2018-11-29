import React from 'react';
import Post from './post';

export default class Posts extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <React.Fragment>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </React.Fragment>
    );
  }
}
