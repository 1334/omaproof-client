import React from 'react';
import styled from 'styled-components';
import Textarea from '../styledComponents/textarea';

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

  textarea {
    width: 100%;
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
        <Textarea
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
