import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '../../styledComponents/input';
import Button from '../../styledComponents/button';

import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;

  & > * {
    margin: 1em 0;
  }
  .input {
    background: white;
    margin: 2vh 0;
    padding-top: 0.5em;
  }
  .button-next {
    align-self: flex-end;
  }
  .text-above {
    text-align: center;
    margin-bottom: 2em;
  }
  .button-next {
    margin-top: 10vh;
  }
`;

export default class GroupInfo extends React.Component {
  state = {
    description: 'Codeworks',
    welcomeText: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  passProps = () => {
    this.props.handleSubmit(this.state);
  };
  render() {
    return (
      <StyledLogin>
        <div className="text-above">
          {' '}
          Please fill in the group description, and personalize your welcoming
          message
        </div>
        <FormControl className="input">
          <Input
            type="text"
            name="description"
            label="Group description"
            value={this.state.description}
            handleChange={this.handleChange}
          />
        </FormControl>
        <FormControl className="input">
          <Input
            type="text"
            name="welcomeText"
            label="Welcome message"
            value={this.state.welcomeText}
            handleChange={this.handleChange}
          />
        </FormControl>
        <div className="button-next">
          <Button onClick={this.passProps}>next</Button>
        </div>
      </StyledLogin>
    );
  }
}
