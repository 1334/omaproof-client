import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '../../styledComponents/button';

import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 80px auto;

  & > * {
    margin: 1em 0;
  }
  .input {
    background: white;
    margin: 0.2em 0;
  }
  .button-next {
    align-self: flex-end;
  }
`;

export default class GroupInfo extends React.Component {
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
      <StyledLogin>
        <FormControl className="input">
          <InputLabel>Group Name</InputLabel>
          <Input type="text" name="name" onChange={this.onChange} />
        </FormControl>
        <FormControl className="input">
          <InputLabel>Welcome message</InputLabel>
          <Input type="text" name="welcomeMsg" onChange={this.onChange} />
        </FormControl>
        <div className="button-next">
          <Button onClick={this.passProps}>next</Button>
        </div>
      </StyledLogin>
    );
  }
}
