import React from 'react';
import { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import Posts from './posts';
import NewPost from './newPost';
import NewPostButton from './newPostButton';
import { Modal, ModalBackground } from './animations/modal';

import data from '../data/oma.json';

const StyledFeed = styled.div`
  background-color: ${props => props.theme.colors.creme};
  & > * {
    padding: 0 18px;
  }
`;

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
      <StyledFeed>
        <NewPostButton newPostClicked={this.toggleNewPost} />
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
          <Posts posts={posts} />
        </div>
      </StyledFeed>
    );
  }
}
export default Feed;
