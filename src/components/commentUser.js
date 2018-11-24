import React from 'react';

export default class CommentUser extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user">
        <img src={user.profilePicture} alt={user.name} />
        {user.name}
      </div>
    );
  }
}
