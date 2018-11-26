import React from 'react';
import { PoseGroup } from 'react-pose';

import Posts from './posts';
import NewPost from './newPost';
import { Modal, ModalBackground } from './animations/modal';

import data from '../data/oma.json';

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
            <ModalBackground
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
