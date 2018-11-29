import React, { Component } from 'react';
import Textarea from '../styledComponents/textarea';
import Button from '../styledComponents/button';
import './test.css';

import { ModalBackground, ModalMiddle } from './animations/modal';

class Member extends Component {
  state = {
    avatar: 'https://randomuser.me/api/portraits/thumb/men/89.jpg',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  handleChangee = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  createMember = () => {
    this.props.submitMember(this.state);
  };

  render() {
    return (
      <div className="member-div">
        <ModalBackground onClick={this.props.closePopup} />
        <ModalMiddle>
          <div className="popup_inner">
            <h3>Add member</h3>
            <h4>Add image</h4>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={this.handleChangee}
              //   placeholder="add profile picture"
            />
            <h4>Name</h4>
            <Textarea
              type="text"
              name="firstName"
              placeholder="first name"
              onChange={this.handleChangee}
            />
            <h4>Last Name</h4>
            <Textarea
              type="text"
              name="lastName"
              placeholder="last name"
              onChange={this.handleChangee}
            />
            <h4>Phone</h4>
            <Textarea
              type="text"
              name="phoneNumber"
              placeholder="phone number"
              onChange={this.handleChangee}
            />
            <br />
            <Button onClick={this.createMember}>submit</Button>
            {/* <button onClick={this.consoleLogThis}>submit</button> */}
          </div>
        </ModalMiddle>
      </div>
    );
  }
}

export default Member;
