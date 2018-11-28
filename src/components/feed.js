import React from 'react';
import { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import Posts from './posts';
import NewPost from './newPost';
import NewPostButton from './newPostButton';
import { Modal, ModalBackground } from './animations/modal';

import data from '../data/oma.json';

import LOGIN_MUTATION from '../graphql/mutations/login';

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
    posts: data,
    newPost: false,
    userToken: '',
    groupToken: ''
  };

  componentDidMount() {
    this.setState({
      userToken: localStorage.getItem('userToken') || '',
      groupToken: localStorage.getItem('groupToken') || ''
    });
  }

  toggleNewPost = () => {
    document.body.style.overflow = this.state.newPost ? 'auto' : 'hidden';
    this.setState({ newPost: !this.state.newPost });
  };

  render() {
    const { posts } = this.state;
    return (
      <StyledFeed>
        <div className="new-post">
          <NewPostButton newPostClicked={this.toggleNewPost} />
        </div>
        {!this.state.userToken && (
          <Mutation
            mutation={LOGIN_MUTATION}
            variables={{ contactNumber: 'codeworks', password: 'any' }}
          >
            {(login, { loading, error, called, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>There have been an error :(</div>;
              if (data) {
                {
                  localStorage.setItem('userToken', data.login.token);
                }
                return <React.Fragment />;
              }
              if (!called) {
                {
                  login();
                }
                return <React.Fragment />;
              }
            }}
          </Mutation>
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
        <div className="feed">
          <Posts posts={posts} />
        </div>
      </StyledFeed>
    );
  }
}
export default Feed;
