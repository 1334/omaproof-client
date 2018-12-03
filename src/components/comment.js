import React from 'react';
import styled from 'styled-components';

import CommentUser from './commentUser';
import DeleteComment from './deleteComment';

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
    const { comment, user } = this.props;

    return (
      <StyledComment>
        <CommentUser user={comment.user} />
        {comment.description}{' '}
        {comment.user.id === user.id && (
          <DeleteComment comment={comment} user={user} />
        )}
      </StyledComment>
    );
  }
}
