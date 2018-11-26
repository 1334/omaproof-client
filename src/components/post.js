import React from 'react';

import Comment from './comment';
import AddComment from './addComment';

export default class Post extends React.Component {
  state = {
    shownComments: [],
    hiddenComments: []
  };

  componentDidMount() {
    this.setState({
      shownComments: this.props.post.comments.slice(-3),
      hiddenComments: this.props.post.comments.slice(0, -3)
    });
  }

  showComments = e => {
    e.preventDefault();
    this.setState({
      shownComments: this.props.post.comments,
      hiddenComments: []
    });
  };

  render() {
    const { post } = this.props;
    const { shownComments, hiddenComments } = this.state;
    const tags = post.tags.map(tag => `#${tag}`).join(', ');

    return (
      <div className="post">
        <h1>{post.content.description}</h1>
        <img src={post.content.mediaUrl} alt={post.content.description} />
        {tags}
        <div className="comments">
          {hiddenComments.length > 0 ? (
            <a href="#" onClick={this.showComments}>
              show {hiddenComments.length} comments more
            </a>
          ) : null}
          {shownComments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
          <AddComment postId={post.id} />
        </div>
      </div>
    );
  }
}
