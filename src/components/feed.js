import React from 'react';
import data from '../data/oma.json';
import Posts from './posts';

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
