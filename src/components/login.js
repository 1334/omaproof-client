import React from 'react';

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
      <div className="login">
        <label htmlFor="login">
          Enter your phone number
          <input
            value={this.state.value}
            type="tel"
            id="login"
            placeholder="Enter your phone number"
            pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{3}"
            required
            onChange={this.onKeyPress}
          />
        </label>
        <button
          type="submit"
          onClick={this.onSubmit}
          // disabled={this.state.submit ? null : 'disabled'}
        >
          Next
        </button>
      </div>
    );
  }
}
