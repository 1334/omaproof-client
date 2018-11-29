import React from 'react';
import Textarea from '../styledComponents/textarea';
import Button from '../styledComponents/button';

export default class Password extends React.Component {
  state = {
    input: ''
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
      <div className="password">
        <label htmlFor="password">
          {this.props.question}
          <Textarea
            value={this.state.value}
            type="text"
            id="password"
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
      </div>
    );
  }
}
