import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';
import UserContext from '../../contexts/userContext';
import { Mutation } from 'react-apollo';

import Button from '../../styledComponents/button';
import Input from '../../styledComponents/input';
import CREATE_USER_MUTATION from '../../graphql/mutations/createUser';

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
  text-shadow: none;: 10vh
  padding: 6px 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
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
    name: '',
    contactNumber: '',
    generation: '',
    monthOfBirth: '',
    yearOfBirth: '',
    status: 'admin',
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQvLfGDGZtXgxzo4avCQJjtWT-EfhpF7EF4gFLWmL6Exm07koLA',
    uploading: false
  };

  fileInput = React.createRef();

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = event => {
    const target = event.target;
    this.setState({ generation: target.value });
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
        this.setState({ picture: data.secure_url, uploading: false })
      );
  };

  isPostValid() {
    return this.state.description.length && this.state.picture.length;
  }
  render() {
    return (
      <StyledFirstMember>
        <h1>Admin info</h1>
        <div className="text-above">
          Before creating a new group, please fill in some information about
          yourself
        </div>
        <label className="media-label" htmlFor="media">
          <img
            src={this.state.picture}
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
        <div className="nameAndPhone">
          <FormControl>
            <Input
              type="text"
              label="Name"
              name="name"
              value={this.state.name}
              handleChange={this.handleChange}
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              label="Phone"
              name="contactNumber"
              value={this.state.contactNumber}
              handleChange={this.handleChange}
            />
          </FormControl>
        </div>
        <div className="familyStatus">
          <FormControl>
            {/* <InputLabel>Month</InputLabel> */}
            <Input
              label="Month"
              type="text"
              name="monthOfBirth"
              value={this.state.monthOfBirth}
              handleChange={this.handleChange}
            />
          </FormControl>
          <FormControl>
            {/* <InputLabel>Year</InputLabel> */}
            <Input
              label="Year"
              type="text"
              name="yearOfBirth"
              value={this.state.yearOfBirth}
              handleChange={this.handleChange}
            />
          </FormControl>
        </div>
        <br />
        <div className="switch-field">
          <input
            type="radio"
            id="switch_3_left"
            name="switch_3"
            value="CHILD"
            onClick={this.handleClick}
          />
          <label htmlFor="switch_3_left">Child</label>
          <input
            type="radio"
            id="switch_3_center"
            name="switch_3"
            value="PARENT"
            onClick={this.handleClick}
          />
          <label htmlFor="switch_3_center">Parent</label>
          <input
            type="radio"
            id="switch_3_right"
            name="switch_3"
            value="GRANDPARENT"
            onClick={this.handleClick}
          />
          <label htmlFor="switch_3_right">Grandparent</label>
        </div>
        <br />
        <UserContext.Consumer>
          {({ updateUser }) => (
            <Mutation
              mutation={CREATE_USER_MUTATION}
              variables={{
                name: this.state.name,
                picture: this.state.picture,
                monthOfBirth: this.state.monthOfBirth,
                yearOfBirth: this.state.yearOfBirth,
                contactNumber: this.state.contactNumber,
                generation: this.state.generation
              }}
            >
              {createUser => (
                <Button
                  onClick={() => {
                    createUser().then(({ data }) => {
                      const user = {
                        ...data.createUser.user,
                        userToken: data.createUser.token
                      };
                      updateUser(user);

                      this.passProps();
                    });
                  }}
                  className="next-button"
                >
                  Next
                </Button>
              )}
            </Mutation>
          )}
        </UserContext.Consumer>
      </StyledFirstMember>
    );
  }
}
