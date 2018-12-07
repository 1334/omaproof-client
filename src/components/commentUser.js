import React from 'react';
import styled from 'styled-components';

const StyledCommentUser = styled.div`
  img {
    position: absolute;
    left: -3em;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
  span {
    font-weight: bold;
  }
`;

function CommentUser(props) {
  const { user } = props;
  return (
    <StyledCommentUser>
      <img src={user.picture || 'http://placehold.it/32x32'} alt={user.name} />
      <span>{user.name}</span>
    </StyledCommentUser>
  );
}

export default CommentUser;
