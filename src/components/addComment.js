import React from 'react';
import styled from 'styled-components';

import Button from '../styledComponents/button';

const StyledAddComment = styled.div`
  position: relative;
  margin-top: 1.5em;
  padding-bottom: 1.5em;

  img {
    position: absolute;
    border-radius: 50%;
    top: -0.85em;
  }

  input {
    border: none;
    background-color: none;
    width: 100%;
    height: 80%;
    font-size: 1rem;
    color: ${props => props.theme.colors.blue};
    border-bottom: 1px solid ${props => props.theme.colors.blue};
    padding-left: 3em;
    margin-bottom: 0.4em;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

export default class AddComment extends React.Component {
  createComment = () => {
    console.log('create comment for post with id', this.props.postId);
  };

  render() {
    const { postId } = this.props;
    return (
      <StyledAddComment>
        <img src="http://placehold.it/32x32" alt="me" />
        <input
          id={`comment-${postId}`}
          type="text"
          placeholder="Add your comment"
        />
        <div className="buttons">
          <Button type="submit" onClick={this.createComment}>
            Add
          </Button>
        </div>
      </StyledAddComment>
    );
  }
}
