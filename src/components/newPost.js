import React from 'react';

class NewPost extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a post</h1>
        <label htmlFor="content">
          Contents
          <textarea name="content" id="content" cols="30" rows="10" />
        </label>
        <label htmlFor="media">
          <input accept="image/*" id="media" type="file" />
        </label>
        <button>Create new post</button>
      </div>
    );
  }
}

export default NewPost;
