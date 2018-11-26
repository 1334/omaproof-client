import React from 'react';
import posed, { PoseGroup } from 'react-pose';

import Posts from './posts';
import NewPost from './newPost';

import data from '../data/oma.json';

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

class Feed extends React.Component {
  state = {
    posts: data,
    newPost: false
  };

  toggleNewPost = () => {
    document.body.style.overflow = this.state.newPost ? 'auto' : 'hidden';
    this.setState({ newPost: !this.state.newPost });
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.toggleNewPost}>Add new post</button>
        <PoseGroup>
          {this.state.newPost && [
            <Shade
              key="shade"
              className="shade"
              onClick={this.toggleNewPost}
            />,
            <Modal key="modal" className="modal">
              <NewPost />
            </Modal>
          ]}
        </PoseGroup>
        <div className="feed">
          <h1>Feed</h1>
          <Posts posts={posts} />
        </div>
      </React.Fragment>
    );
  }
}
export default Feed;
