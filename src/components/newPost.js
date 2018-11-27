import React from 'react';
import styled from 'styled-components';
import Textarea from '../styledComponents/textarea';
import Button from '../styledComponents/button';

const StyledNewPost = styled.div`
  position: relative;
  margin-top: 1.5em;
  padding: 1.5em 18px;

  img {
    position: absolute;
    border-radius: 50%;
    top: 12px;
  }

  textarea {
    width: 100%;
  }

  button {
    margin: 1em 0;
    width: 100%;
  }
`;

class NewPost extends React.Component {
  state = {
    description: '',
    media: ''
  };

  fileInput = React.createRef();

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  publishPost = () => {
    console.log(this.fileInput.current.files);
  };

  render() {
    return (
      <StyledNewPost>
        <img
          src="http://placehold.it/32x32"
          alt="me"
          onChange={this.handleChange}
        />
        <Textarea
          value={this.state.description}
          name="description"
          id="description"
          placeholder="Tell me something"
          onChange={this.handleChange}
        />
        <input accept="image/*" id="media" type="file" ref={this.fileInput} />
        <Button onClick={this.publishPost}>Publish</Button>
      </StyledNewPost>
    );
  }
}

export default NewPost;
