import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '../../styledComponents/input';
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
    margin: 2vh 0;
  }
  .button-next {
    align-self: flex-end;
  }
  .text-above {
    margin-top: -12vh;
    margin-bottom: 10vh;
    padding-top: 3vh;
    text-align: center;
  }
  .button-next {
    margin-top: 10vh;
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
      <div>
        <StyledLogin>
          <div className="text-above">
            {' '}
            Please fill in the group name, and personalize your welcoming
            message
          </div>
          <FormControl className="input">
            <Input
              type="text"
              name="name"
              label="Group name"
              onChange={this.onChange}
            />
          </FormControl>
          <FormControl className="input">
            <Input
              type="text"
              name="welcomeMsg"
              label="Welcome message"
              onChange={this.onChange}
            />
          </FormControl>
          <div className="button-next">
            <Button onClick={this.passProps}>next</Button>
          </div>
        </StyledLogin>
      </div>
    );
  }
}
