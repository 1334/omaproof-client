import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Comment from './comment';
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
      color: ${props => props.theme.colors.textLight};
    }
  }
`;

export default class Post extends React.Component {
  showComments = e => {
    e.preventDefault();
    this.setState({
      shownComments: this.props.post.comments,
      hiddenComments: []
    });
  };

  render() {
    const { post, user } = this.props;
    const shownComments = post.comments.slice(-3);
    // const hiddenComments = post.comments.slice(0, -3);
    // const { shownComments, hiddenComments } = this.state;
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
          LIKE <label htmlFor={`comment-${post.id}`}>COMMENT</label>
        </div>
        <div className="comments">
          {/* {hiddenComments.length > 0 ? (
            <a href="/more-comments" onClick={this.showComments}>
              show {hiddenComments.length} comments more
            </a>
          ) : null} */}
          {shownComments.map(comment => (
            <Comment comment={comment} key={comment.id} user={user} />
          ))}
          <AddComment postId={post.id} user={user} />
        </div>
      </StyledPost>
    );
  }
}
