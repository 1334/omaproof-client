import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';
import Button from '../../styledComponents/button';

import './test.css';

const StyledNewPost = styled.div`
  .member-info {
    background-color: ${props => props.theme.colors.bg};
    box-shadow: 0px 0px 5px 2px #ccc;
    margin: 0;
    padding: 0;
    font-weight: bold;

    & > div {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      img {
        margin: 0.5em 1em;
        width: 32px;
        height: 32px;
      }
    }
    span {
      margin-left: 4em;
    }
  }

  .member-details {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.text};

    & > * {
      margin: 0.5em 0;
    }
  }

  .familyStatus {
    display: flex;
  }

  .switch-field {
    font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;
    padding: 0px;
    overflow: hidden;
    margin: 0.5em auto;
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
    width: 91px;
    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    font-weight: normal;
    text-align: center;
    text-shadow: none;
    padding: 6px 2px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
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
    margin: 0.5em auto 0;
    img {
      width: 60px;
      height: 60px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  input[type='file'] {
    display: none;
  }
`;

export default class Member extends React.Component {
  state = {
    name: '',
    contactNumber: '',
    generation: '',
    monthOfBirth: '',
    yearOfBirth: '',
    status: 'member',
    expanded: false,
    picture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQvLfGDGZtXgxzo4avCQJjtWT-EfhpF7EF4gFLWmL6Exm07koLA',
    uploading: false
  };

  handleChangee = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };
  handleClick = e => {
    this.setState({ generation: e.target.value });
  };
  createMember = () => {
    this.props.submitMember(this.state);
    this.setState({
      name: '',
      contactNumber: '',
      generation: '',
      monthOfBirth: '',
      yearOfBirth: '',
      expanded: false,
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQvLfGDGZtXgxzo4avCQJjtWT-EfhpF7EF4gFLWmL6Exm07koLA',
      uploading: false
    });
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

  render() {
    return (
      <StyledNewPost>
        <ExpansionPanel expanded={this.state.expanded}>
          <ExpansionPanelSummary
            onClick={() => {
              this.setState({ expanded: !this.state.expanded });
            }}
            classes={{ root: 'member-info' }}
          >
            <img src={this.state.picture} alt="taken" className="pic" />
            <div>{this.state.name || 'Add new member'}</div>
            <span className="icon-plus-positive" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={{ root: 'member-details' }}>
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
            <FormControl>
              <InputLabel>Name</InputLabel>{' '}
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChangee}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input
                type="text"
                name="contactNumber"
                value={this.state.contactNumber}
                onChange={this.handleChangee}
              />
            </FormControl>
            <div className="familyStatus">
              <FormControl>
                <InputLabel>Month</InputLabel>
                <Input
                  type="text"
                  name="monthOfBirth"
                  value={this.state.monthOfBirth}
                  onChange={this.handleChangee}
                />
              </FormControl>
              <FormControl>
                <InputLabel>Year</InputLabel>
                <Input
                  type="text"
                  name="yearOfBirth"
                  value={this.state.yearOfBirth}
                  onChange={this.handleChangee}
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
                checked={this.state.generation === 'CHILD'}
              />
              <label htmlFor="switch_3_left">Child</label>
              <input
                type="radio"
                id="switch_3_center"
                name="switch_3"
                value="PARENT"
                onClick={this.handleClick}
                checked={this.state.generation === 'PARENT'}
              />
              <label htmlFor="switch_3_center">Parent</label>
              <input
                type="radio"
                id="switch_3_right"
                name="switch_3"
                value="GRANDPARENT"
                onClick={this.handleClick}
                checked={this.state.generation === 'GRANDPARENT'}
              />
              <label htmlFor="switch_3_right">Grandparent</label>
            </div>
            <br />
            <Button onClick={this.createMember}>Add member</Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </StyledNewPost>
    );
  }
}
