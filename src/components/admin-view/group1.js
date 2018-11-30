import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './test.css';

export default class Group1 extends React.Component {
  state = {
    name: '',
    welcomeMsg: ''
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  passProps = () => {
    this.props.handleSubmit(this.state);
  };
  render() {
    return (
      <div className="group1">
        <FormControl>
          <InputLabel>Group Name</InputLabel>
          <Input type="text" name="name" onChange={this.onChange} />
        </FormControl>
        <FormControl>
          <InputLabel>Welcome message</InputLabel>
          <Input type="text" name="welcomeMsg" onChange={this.onChange} />
        </FormControl>
        <button onClick={this.passProps}>next</button>
      </div>
    );
  }
}
