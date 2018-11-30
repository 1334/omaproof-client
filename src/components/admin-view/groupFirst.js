import React from 'react';
import { PoseGroup } from 'react-pose';

import StepsFlow from '../animations/stepsFlow';
import Group1 from './group1';
import Group2 from './group2';

export default class GroupInfo extends React.Component {
  state = {
    step: 0,
    displayComponent: false,
    isVisible: false,
    component: [Group1, Group2],
    group: {
      welcomeMsg: '',
      mambers: [],
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
          ...this.state.group,
          welcomeMsg: data.welcomeMsg,
          name: data.name
        }
      });
    } else if (this.state.step === 1) {
      this.setState({
        // step: this.state.step + 2,
        // group: {
        //   ...this.state.group,
        //   members: [...this.state.group.members, ...data]
        // }
      });
    } else if (this.state.step === 2) {
      this.setState({
        // step: this.state.step + 1,
        // group: {
        //   ...this.state.group,
        //   security: [...this.state.group.security, ...data]
        // }
      });
    } else if (this.state.step === 3) {
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
      group: this.state.group
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
