import React from 'react';
import { PoseGroup } from 'react-pose';

import StepsFlow from './animations/stepsFlow';
import GroupInfo from './groupInfo';
import Members from './members';
import Questions from './questions';
import GroupEnd from './groupEnd';
import Feed from './feed';

import styled from 'styled-components';

const StyledAddComment = styled.div`
  position: relative;
  margin-top: 1.5em;
  padding-bottom: 1.5em;

  textarea {
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

export default class AdminView extends React.Component {
  state = {
    step: 0,
    displayComponent: false,
    isVisible: false,
    component: [GroupInfo, Members, Questions, GroupEnd, Feed],
    group: {
      description: '',
      security: [],
      members: [],
      name: ''
    }
  };

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  handleSubmit = data => {
    if (this.state.step === 0) {
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          description: data.description,
          name: data.name
        }
      });
    } else if (this.state.step === 1) {
      this.setState({
        step: this.state.step + 2,
        group: {
          ...this.state.group,
          members: [...this.state.group.members, ...data]
        }
      });
    } else if (this.state.step === 2) {
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          security: [...this.state.group.security, ...data]
        }
      });
    } else if (this.state.step === 3) {
      this.setState({
        step: this.state.step + 1
      });
    } else if (this.state.step === 4) {
      // this.props.history.push('/');
      console.log('ada');
    }
  };
  render() {
    console.log('state', this.state);
    const ComponentType = this.state.component[this.state.step];
    const props = {
      handleSubmit: this.handleSubmit,
      key: this.state.step,
      group: this.state.group
      // style: `background-color: blue`
    };
    // if (ComponentType === Password) {
    //   props.question = questions[this.state.step - 1];
    // }
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
