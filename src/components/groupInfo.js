import React, { Component } from 'react';

class GroupInfo extends Component {
  state = {
    name: '',
    description: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  createGroup = () => {
    this.props.handleSubmit(this.state);
  };
  passProps = () => {
    this.props.handleSubmit(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <h4>Insert group name</h4>
        <input
          type="text"
          name="name"
          placeholder="GROUP NAME"
          onChange={this.onChange}
        />
        <h4>Set group discription</h4>
        <input
          type="text"
          name="description"
          placeholder="DESCRIPTION"
          onChange={this.onChange}
        />
        <br />

        <button onClick={this.passProps}> next </button>
      </React.Fragment>
    );
  }
}

export default GroupInfo;
