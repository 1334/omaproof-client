import React from 'react';
import { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import Posts from './posts';
import NewPost from './newPost';
import NewPostButton from './newPostButton';
import { Modal, ModalBackground } from './animations/modal';
import GET_POSTS_QUERY from '../graphql/queries/getPosts';

const StyledFeed = styled.div`
  background-color: ${props => props.theme.colors.creme};
  padding: 0.2em 0 1em;
  max-width: 700px;
  margin: 0 auto;

  & > * > * {
    padding: 0 18px;
  }

  .new-post {
    position: sticky;
    top: 0;
    z-index: 2;
    opacity: 0.8;
  }
`;

class Feed extends React.Component {
  state = {
    users: [],
    newPost: false
  };

  toggleNewPost = () => {
    document.body.style.overflow = this.state.newPost ? 'auto' : 'hidden';
    this.setState({ newPost: !this.state.newPost });
  };

  render() {
    const { group } = this.props;

    return (
      <StyledFeed>
        <div className="new-post">
          <NewPostButton newPostClicked={this.toggleNewPost} />
        </div>
        {group && (
          <Query query={GET_POSTS_QUERY} variables={{ id: this.props.group }}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>{error.message} :(</p>;
              return (
                <div className="feed">
                  <Posts posts={data.getPosts} />
                </div>
              );
            }}
          </Query>
        )}
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
      </StyledFeed>
    );
  }
}
export default Feed;
