import React from 'react';
import { PoseGroup } from 'react-pose';

import StepsFlow from '../animations/stepsFlow';
import FirstMember from './firstMember';
import GroupInfo from './groupInfo';
import AddMembers from './addMembers';
import AddGrandchildren from './addGrandchildren';
import Group4 from './group4';

export default class CreateGroup extends React.Component {
  state = {
    step: 0,
    displayComponent: false,
    isVisible: false,
    component: [FirstMember, GroupInfo, AddMembers, AddGrandchildren, Group4],
    group: {
      welcomeMsg: '',
      members: [],
      grandChildren: [],
      name: ''
    }
  };
  componentDidMount() {
    this.setState({ isVisible: true });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = data => {
    if (this.state.step === 0) {
      this.setState({
        step: this.state.step + 1,
        group: {
          members: [data]
        }
      });
    } else if (this.state.step === 1) {
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          welcomeMsg: data.welcomeMsg,
          name: data.name
        }
      });
    } else if (this.state.step === 2) {
      console.log('data', data);
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          members: [...data]
        }
      });
    } else if (this.state.step === 3) {
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          grandChildren: [...data]
        }
      });
      // this.setState({
      //   step: this.state.step + 1
      // });
    } else if (this.state.step === 4) {
      // this.props.history.push('/');
      console.log('ada');
    }
  };

  render() {
    console.log(this.state);
    const ComponentType = this.state.component[this.state.step];
    const props = {
      handleSubmit: this.handleSubmit,
      key: this.state.step,
      group: this.state.group,
      user: this.props.user
    };
    return (
      <div>
        <PoseGroup preEnterPose="pre-enter">
          {this.state.isVisible && (
            <StepsFlow key={this.state.step}>
              <ComponentType {...props} />
            </StepsFlow>
          )}
        </PoseGroup>
      </div>
    );
  }
}
