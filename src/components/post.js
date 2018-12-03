import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Comment from './comment';
import DeletePost from './deletePost';
import AddComment from './addComment';

const StyledPost = styled.div`
  background-color: ${props => props.theme.colors.bg};
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
    align-items: center;
    padding: 0.8em 0;

    img {
      border-radius: 50%;
      margin-right: 0.8em;
    }

    span:last-child {
      flex-grow: 2;
      text-align: right;
      color: ${props => props.theme.colors.textLight};
    }
  }
`;

export default class Post extends React.Component {
  state = {
    showAllComments: false
  };

  showComments = e => {
    e.preventDefault();
    this.setState({
      showAllComments: !this.state.showAllComments
    });
  };

  render() {
    const { post, user } = this.props;
    const { showAllComments } = this.state;

    const shownComments = showAllComments
      ? post.comments
      : post.comments.slice(-3);

    const moreComments = post.comments > shownComments;

    return (
      <StyledPost>
        <div className="post-info">
          <img
            src={post.user.profilePicture || 'http://placehold.it/32x32'}
            alt="post.user.name"
          />
          <span>{post.user.name}</span>
          <span>{moment(post.createdAt).fromNow()}</span>
        </div>
        <img
          className="post-image"
          src={post.mediaUrl}
          alt={post.description}
        />
        <div className="post-description">{post.description}</div>
        <div className="social">
          LIKE <label htmlFor={`comment-${post.id}`}>COMMENT</label>{' '}
          {post.user.id === user.id && <DeletePost post={post} user={user} />}
        </div>
        <div className="comments">
          {!showAllComments && moreComments ? (
            <a href="/more-comments" onClick={this.showComments}>
              show more comments
            </a>
          ) : null}
          {shownComments.map(comment => (
            <Comment comment={comment} key={comment.id} user={user} />
          ))}
          <AddComment postId={post.id} user={user} />
        </div>
      </StyledPost>
    );
  }
}
