import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default class FirstMember extends React.Component {
  state = {
    id: 1,
    memberName: '',
    phoneNumber: '',
    familyStatus: '',
    month: '',
    year: '',
    status: 'admin',
    mediaUrl: '',
    uploading: false
  };

  fileInput = React.createRef();

  handleChangee = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = event => {
    const target = event.target;
    this.setState({ familyStatus: target.name });
  };
  passProps = () => {
    this.props.handleSubmit(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <input accept="image/*" id="media" type="file" ref={this.fileInput} />
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            name="memberName"
            value={this.state.memberName}
            onChange={this.handleChangee}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
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
        <div className="familyStatus">
          <button
            className="buttonMember"
            name="child"
            onClick={this.handleClick}
          >
            child
          </button>
          <button
            className="buttonMember"
            name="parent"
            onClick={this.handleClick}
          >
            parent
          </button>
          <button
            className="buttonMember"
            name="grandparent"
            onClick={this.handleClick}
          >
            grandparent
          </button>
        </div>
        <br />

        <button onClick={this.passProps}>Next</button>
      </React.Fragment>
    );
  }
}
