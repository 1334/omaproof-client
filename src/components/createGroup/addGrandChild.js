import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '../../styledComponents/button';
import styled from 'styled-components';

const StyledNewGrandchild = styled.div`
  margin-top: 1.5em;

  .switch-field {
    font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;
    padding: 0px;
    overflow: hidden;
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
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.1);
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
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

  div.input {
    margin-right: 20px;
  }

  .user-profile {
    border-radius: 50%;
    bottom: 22px;
    height: 40px;
    width: 40px;
  }

  input[type='file'] {
    display: none;
  }

  .media-label {
    &:hover {
      cursor: pointer;
    }
  }

  .uploaded-media {
    display: hidden;
  }

  textarea {
    width: 100%;
    margin: 1em 0;
  }

  button {
    margin: 1em 0;
    width: 100%;
  }

  img.uploaded-media {
    width: 100%;
  }
`;

export default class Grandchild extends React.Component {
  state = {
    memberName: '',
    familyStatus: 'child',
    month: '',
    year: '',
    mediaUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQvLfGDGZtXgxzo4avCQJjtWT-EfhpF7EF4gFLWmL6Exm07koLA',
    expanded: false
  };
  handleChangee = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  createMember = () => {
    this.props.submitGrandChild(this.state);
    this.setState({
      memberName: '',
      month: '',
      year: '',
      expanded: false,
      mediaUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQvLfGDGZtXgxzo4avCQJjtWT-EfhpF7EF4gFLWmL6Exm07koLA'
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
        this.setState({ mediaUrl: data.secure_url, uploading: false })
      );
  };
  render() {
    return (
      <StyledNewGrandchild>
        <ExpansionPanel expanded={this.state.expanded}>
          <ExpansionPanelSummary
            onClick={() => {
              this.setState({ expanded: !this.state.expanded });
            }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', height: '4vh' }}
            >
              <div className="input">
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
              </div>
              <p> New grandchild </p>

              <span className="icon-plus-positive" />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="memberDetails">
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input
                type="text"
                name="memberName"
                value={this.state.memberName}
                onChange={this.handleChangee}
              />
            </FormControl>
            <div className="familyStatus">
              <FormControl>
                <InputLabel>Month</InputLabel>
                <Input
                  type="number"
                  name="month"
                  value={this.state.month}
                  onChange={this.handleChangee}
                />
              </FormControl>
              <FormControl>
                <InputLabel>Year</InputLabel>
                <Input
                  type="number"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChangee}
                />
              </FormControl>
            </div>
            <br />

            <Button onClick={this.createMember}>Done</Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </StyledNewGrandchild>
    );
  }
}
