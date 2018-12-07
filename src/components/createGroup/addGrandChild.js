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

    .icon-plus-positive {
      flex-grow: 3;
      text-align: right;
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
    generation: 'CHILD',
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
    this.props.submitGrandChild({
      name: this.state.name,
      contactNumber: '',
      generation: 'CHILD',
      monthOfBirth: this.state.monthOfBirth,
      yearOfBirth: this.state.yearOfBirth,
      picture: this.state.picture
    });

    this.setState({
      name: '',
      contactNumber: '',
      generation: 'CHILD',
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
            <div>{this.state.name || 'Add grandchild'}</div>
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
            <Button onClick={this.createMember}>Add grandchild</Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </StyledNewPost>
    );
  }
}
