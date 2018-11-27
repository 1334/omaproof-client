import React from 'react';
import styled from 'styled-components';

import CommentUser from './commentUser';

const StyledComment = styled.div`
  position: relative;
  margin: 0.8em 0 0.8em 3em;

  .user img {
    position: absolute;
    left: -3em;
    border-radius: 50%;
  }
`;

export default class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <StyledComment>
        <CommentUser user={comment.user} />
        {comment.content}
      </StyledComment>
    );
  }
}
