import React, { Component } from 'react';
import './test.css';

class AddMemberManually extends Component {
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
  consoleLogThis = () => {
    console.log(this.state);
  };
  createMember = () => {
    this.props.submitMember(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="popup" onClick={this.props.closePopup} />
        <div className="popup_inner">
          <h1>Add member</h1>
          <h4>Add image</h4>
          <input
            type="text"
            name="avatar"
            defaultValue="avatar"
            onChange={this.handleChangee}
            //   placeholder="add profile picture"
          />
          <h4>Name</h4>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            onChange={this.handleChangee}
          />
          <h4>Last Name</h4>
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            onChange={this.handleChangee}
          />
          <h4>Phone</h4>
          <input
            type="text"
            name="phoneNumber"
            placeholder="phone number"
            onChange={this.handleChangee}
          />
          <br />
          <button onClick={this.createMember}>submit</button>
          {/* <button onClick={this.consoleLogThis}>submit</button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default AddMemberManually;
