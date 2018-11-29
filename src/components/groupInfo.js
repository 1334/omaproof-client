import React, { Component } from 'react';
import Textarea from '../styledComponents/textarea';
import ButtonLarge from '../styledComponents/buttonLarge';
import './test.css';

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
      <div className="groupInfo">
        <p>Insert group name</p>
        <Textarea
          type="text"
          name="name"
          placeholder="GROUP NAME"
          onChange={this.onChange}
        />
        <p>Set group discription</p>
        <Textarea
          type="text"
          name="description"
          placeholder="DESCRIPTION"
          onChange={this.onChange}
        />
        <br />

        <ButtonLarge onClick={this.passProps}> next </ButtonLarge>
      </div>
    );
  }
}

export default GroupInfo;
