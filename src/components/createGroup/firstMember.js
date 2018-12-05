import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
import styled from 'styled-components';
import Button from '../../styledComponents/button';

import Input from '../../styledComponents/input';

const StyledFirstMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  .user-profile {
    border-radius: 50%;
    bottom: 22px;
    height: 80px;
    width: 80px;
  }
  .next-button {
    
  }
  input[type='file'] {
    display: none;
  }
  .switch-field {

  padding: 40px;
}

.switch-title {
  margin-bottom: 6px;
}

.switch-field input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
}

.switch-field label {
  float: left;
}

.switch-field label {
  display: inline-block;
  width: 93px;
  background-color: #e4e4e4;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  text-shadow: none;
  padding: 6px 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition:    all 0.1s ease-in-out;
  -ms-transition:     all 0.1s ease-in-out;
  -o-transition:      all 0.1s ease-in-out;
  transition:         all 0.1s ease-in-out;
}

.switch-field label:hover {
	cursor: pointer;
}

.switch-field input:checked + label {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
  -webkit-box-shadow: none;
  box-shadow: none;
}

.switch-field label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
  border-radius: 0 4px 4px 0;
}

  .media-label {
    &:hover {
      cursor: pointer;
    }
  }
  .text-above {
    padding-top: 3vh;
    text-align: center;
  }
  .uploaded-media {
    display: hidden;
  }
  .familyStatus {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
  .nameAndPhone {
    display:flex
    flex-direction: column;
    width: 80%;
    maring: 10vh 0;
  }
  input {
    margin: 2vh 0;
  }
  label {
    margin-top: 3vh;
  }

`;

export default class FirstMember extends React.Component {
  state = {
    id: 1,
    memberName: 'Frederik',
    phoneNumber: '4522131',
    familyStatus: 'child',
    month: '06',
    year: '1994',
    status: 'admin',
    mediaUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQvLfGDGZtXgxzo4avCQJjtWT-EfhpF7EF4gFLWmL6Exm07koLA',
    uploading: false
  };

  fileInput = React.createRef();

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = event => {
    const target = event.target;
    this.setState({ familyStatus: target.value });
  };
  passProps = () => {
    this.props.handleSubmit(this.state);
  };
  uploadImage = async e => {
    const file = e.target.files[0];
    if (!file) return;
    this.setState({ uploading: true });

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'omaproof');

    await fetch('https://api.cloudinary.com/v1_1/errstate/image/upload', {
      method: 'POST',
      body: data
    })
      .then(data => data.json())
      .then(data =>
        this.setState({ mediaUrl: data.secure_url, uploading: false })
      );
  };

  isPostValid() {
    return this.state.description.length && this.state.mediaUrl.length;
  }
  render() {
    console.log(this.state);
    return (
      <StyledFirstMember>
        <div className="text-above">
          Before creating a new group, please fill in some information about
          yourself
        </div>
        <div className="input" />
        <label className="media-label" htmlFor="media">
          <img
            src={this.state.mediaUrl}
            alt="me"
            onChange={this.handleChange}
            className="user-profile"
          />
        </label>
        <input
          accept="image/*"
          id="media"
          type="file"
          ref={this.fileInput}
          onChange={this.uploadImage}
        />
        {this.state.uploading && <div>Uploading picture</div>}
        {/* <input accept="image/*" id="media" type="file" ref={this.fileInput} /> */}
        <div className="nameAndPhone">
          <FormControl>
            {/* <InputLabel>Name</InputLabel> */}
            <Input
              type="text"
              label="Name"
              name="memberName"
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl>
            {/* <InputLabel>Phone</InputLabel> */}
            <Input
              type="text"
              label="Phone"
              name="phoneNumber"
              onChange={this.handleChange}
            />
          </FormControl>
        </div>
        <div className="familyStatus">
          <FormControl>
            {/* <InputLabel>Month</InputLabel> */}
            <Input
              label="Month"
              type="number"
              name="month"
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl>
            {/* <InputLabel>Year</InputLabel> */}
            <Input
              label="Year"
              type="number"
              name="year"
              onChange={this.handleChange}
            />
          </FormControl>
        </div>
        <br />
        <div className="switch-field">
          <input
            type="radio"
            id="switch_3_left"
            name="switch_3"
            value="child"
            onClick={this.handleClick}
          />
          <label htmlFor="switch_3_left">Child</label>
          <input
            type="radio"
            id="switch_3_center"
            name="switch_3"
            value="parent"
            onClick={this.handleClick}
          />
          <label htmlFor="switch_3_center">Parent</label>
          <input
            type="radio"
            id="switch_3_right"
            name="switch_3"
            value="grandparent"
            onClick={this.handleClick}
          />
          <label htmlFor="switch_3_right">Grandparent</label>
        </div>
        {/* <div className="familyStatus">
          {' '}
          <input
            type="radio"
            className="buttonMember"
            value="child"
            onClick={this.handleClick}
            name="maxim"
          />
          <label className="buttonMember" htmlFor="one">
            Child
          </label>
          <input
            type="radio"
            className="buttonMember"
            value="parent"
            onClick={this.handleClick}
            name="maxim"
          />
          <label className="buttonMember" htmlFor="two">
            Parent
          </label>
          <input
            type="radio"
            className="buttonMember"
            value="grandparent"
            onClick={this.handleClick}
            name="maxim"
          />
          <label className="buttonMember" htmlFor="three">
            Grandparent
          </label>
        </div> */}
        <br />

        <Button onClick={this.passProps} className="next-button">
          Next
        </Button>
      </StyledFirstMember>
    );
  }
}
