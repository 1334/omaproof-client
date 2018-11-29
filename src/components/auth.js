import React from 'react';
import { PoseGroup } from 'react-pose';

import Login from './login';
import Password from './password';
import StepsFlow from './animations/stepsFlow';
import styled from 'styled-components';
import Feed from './feed';

const StyledAddComment = styled.div`
  position: relative;
  margin-top: 1.5em;
  padding-bottom: 1.5em;

  img {
    position: absolute;
    border-radius: 50%;
    top: -0.85em;
  }

  textarea {
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const questions = [
  "What's Jovan favourite food",
  'How many times was Jovan expelled from kindergarten',
  'How many times have he been in jail'
];

export default class Auth extends React.Component {
  state = {
    username: '',
    password: '',
    step: 0,
    component: Login,
    isVisible: false
  };

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  handleSubmit = data => {
    if (this.state.step === 0) {
      this.setState({
        username: data,
        component: Password,
        step: this.state.step + 1
      });
    } else if (this.state.step <= questions.length) {
      this.setState(
        {
          password: this.state.password + data,
          step: this.state.step + 1
        },
        () => {
          if (this.state.step > questions.length) {
            console.log('1234567890');
            this.validate(this.state.username, this.state.password);
            // this.props.history.push('/');
            this.setState({
              component: Feed
            });
          }
        }
      );
    }
  };

  validate(username, password) {
    console.log('user validated with', username, password);
  }

  render() {
    const ComponentType = this.state.component;
    const props = {
      handleSubmit: this.handleSubmit,
      key: this.state.step,
      style: `background-color: blue`
    };
    if (ComponentType === Password) {
      props.question = questions[this.state.step - 1];
    }
    return (
      <StyledAddComment className="auth">
        <PoseGroup preEnterPose="pre-enter">
          {this.state.isVisible && (
            <StepsFlow key={this.state.step}>
              <ComponentType {...props} />
            </StepsFlow>
          )}
        </PoseGroup>
      </StyledAddComment>
    );
  }
}
