import React from 'react';
import Posts from './posts';

import data from '../data/oma.json';

class Feed extends React.Component {
  state = {
    posts: data
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <button>Add new post</button>
        <div className="feed">
          <h1>Feed</h1>
          <Posts posts={posts} />
        </div>
      </React.Fragment>
    );
  }
}
export default Feed;
