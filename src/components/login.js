import React from 'react';
import Textarea from '../styledComponents/textarea';
import Button from '../styledComponents/button';
import styled from 'styled-components';

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

export default class Login extends React.Component {
  state = {
    input: '',
    submit: false
  };

  onKeyPress = event => {
    const target = event.target;
    const valid = target.checkValidity();

    this.setState({ input: event.target.value, submit: valid });
  };

  onSubmit = () => {
    this.props.handleSubmit(this.state.input);
  };

  render() {
    return (
      <StyledAddComment className="login">
        <label htmlFor="login">
          Enter your phone number
          <Textarea
            value={this.state.value}
            type="tel"
            id="login"
            placeholder="Enter your phone number"
            pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{3}"
            required
            onChange={this.onKeyPress}
          />
        </label>
        <Button
          type="submit"
          onClick={this.onSubmit}
          // disabled={this.state.submit ? null : 'disabled'}
        >
          Next
        </Button>
      </StyledAddComment>
    );
  }
}
