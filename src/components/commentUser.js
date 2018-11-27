import React from 'react';
import styled from 'styled-components';

const StyledCommentUser = styled.div`
  img {
    position: absolute;
    left: -3em;
    border-radius: 50%;
  }
  span {
    font-weight: bold;
  }
`;

export default class CommentUser extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <StyledCommentUser>
        <img src={user.profilePicture} alt={user.name} />
        <span>{user.name}</span>
      </StyledCommentUser>
    );
  }
}