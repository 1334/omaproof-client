import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import GET_COMMENTS_QUERY from '../graphql/queries/getComments';
import CREATE_COMMENT_MUTATION from '../graphql/mutations/createComment';
import Textarea from '../styledComponents/textarea';
import Button from '../styledComponents/button';

const StyledAddComment = styled.div`
  position: relative;
  margin-top: 1.5em;
  padding-bottom: 1.5em;

  img {
    position: absolute;
    border-radius: 50%;
    top: -0.85em;
  }

  textarea {
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

export default class AddComment extends React.Component {
  state = {
    description: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isCommentValid = () => {
    return this.state.description.length;
  };

  render() {
    const { postId } = this.props;
    return (
      <Mutation
        mutation={CREATE_COMMENT_MUTATION}
        variables={{
          description: this.state.description,
          postId: this.props.postId
        }}
        refetchQueries={[
          {
            query: GET_COMMENTS_QUERY,
            variables: { id: this.props.postId }
          }
        ]}
        update={cache => console.log(cache)}
      >
        {createComment => (
          <StyledAddComment>
            <img src="http://placehold.it/32x32" alt="me" />
            <Textarea
              value={this.state.description}
              id={`comment-${postId}`}
              name="description"
              type="text"
              placeholder="Add your comment"
              onChange={this.handleChange}
            />
            <div className="buttons">
              <Button
                type="submit"
                onClick={() => {
                  if (this.isCommentValid()) {
                    createComment();
                    this.setState({ description: '' });
                  }
                }}
              >
                Add
              </Button>
            </div>
          </StyledAddComment>
        )}
      </Mutation>
    );
  }
}
