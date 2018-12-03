import React, { Component } from 'react';
import styled from 'styled-components';

const PostButton = styled.div`
  height: 80px;
  margin: 0.8em 0;
  background-color: ${props => props.theme.colors.bg};

  input {
    border: none;
    background-color: none;
    width: 100%;
    height: 80%;
    font-size: 1rem;
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    padding-left: 40px;
  }

  input:disabled {
    background: none;
  }
`;

class NewPostButton extends Component {
  render() {
    return (
      <PostButton onClick={this.props.newPostClicked}>
        <input
          onClick={this.props.newPostClicked}
          placeholder="Tell me something"
        />
      </PostButton>
    );
  }
}

export default NewPostButton;
