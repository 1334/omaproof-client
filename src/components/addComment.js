import React from 'react';

export default class AddComment extends React.Component {
  createComment = () => {
    console.log('create comment for post with id', this.props.postId);
  };

  render() {
    return (
      <div className="add-comment">
        <label htmlFor="new-comment">
          Add new comment
          <input id="comment" type="text" />
        </label>
        <button type="submit" onClick={this.createComment}>
          Create Comment
        </button>
      </div>
    );
  }
}
