import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import CommentUser from './commentUser';
import DeleteComment from './deleteComment';

const StyledComment = styled.div`
  position: relative;
  margin: 0.8em 0 0.8em 3em;

  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user img {
    position: absolute;
    left: -3em;
    border-radius: 50%;
  }

  .timestamp {
    color: ${props => props.theme.colors.textLight};

    & > * {
      margin-left: 0.5em;
    }
  }
`;

export default class Comment extends React.Component {
  render() {
    const { comment, user } = this.props;

    return (
      <StyledComment>
        <div className="user-info">
          <CommentUser user={comment.user} />
          <span className="timestamp">
            {moment(comment.createdAt).fromNow()}
            {comment.user.id === user.id && (
              <DeleteComment comment={comment} user={user} />
            )}
          </span>
        </div>
        {comment.description}{' '}
      </StyledComment>
    );
  }
}
