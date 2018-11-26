import React from 'react';

import CommentUser from './commentUser';

export default class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        {comment.content}
        <CommentUser user={comment.user} />
        <hr />
      </div>
    );
  }
}
