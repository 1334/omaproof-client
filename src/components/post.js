import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Comment from './comment';
import AddComment from './addComment';

const StyledPost = styled.div`
  background-color: white;
  margin: 1em 0;

  img.post-image {
    width: 100%;
  }

  .post-title {
    font-size: 1rem;
    font-weight: bold;
  }

  .social {
    margin: 0.7em 0;
  }

  .post-info {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 0.8em 0;

    img {
      border-radius: 50%;
      margin-right: 0.8em;
    }

    span:last-child {
      flex-grow: 2;
      text-align: right;
      color: ${props => props.theme.colors.grey};
    }
  }
`;

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
    console.log('POST', post);
    return (
      <StyledPost>
        <div className="post-info">
          <img src={post.user.profilePicture} alt="post.user.name" />
          <span>{post.user.name}</span>
          <span>{moment(post.createdAt).fromNow()}</span>
        </div>
        <img
          className="post-image"
          src={post.mediaUrl}
          alt={post.description}
        />
        <h1 className="post-title">{post.description}</h1>
        <div className="post-description">{post.description}</div>
        <div className="social">
          LIKE <label htmlFor={`comment-${post.id}`}>COMMENT</label>
        </div>
        <div className="comments">
          {hiddenComments.length > 0 ? (
            <a href="/more-comments" onClick={this.showComments}>
              show {hiddenComments.length} comments more
            </a>
          ) : null}
          {shownComments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
          <AddComment postId={post.id} />
        </div>
      </StyledPost>
    );
  }
}
