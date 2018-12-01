import React from 'react';
import { PoseGroup } from 'react-pose';

import StepsFlow from '../animations/stepsFlow';
import Group1 from './group1';
import Group2 from './group2';
import Group3 from './group3';
import Feed from '../feed';

export default class GroupInfo extends React.Component {
  state = {
    step: 0,
    displayComponent: false,
    isVisible: false,
    component: [Group1, Group2, Group3, Feed],
    group: {
      welcomeMsg: '',
      members: [],
      grandKids: [],
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
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          members: [...data]
        }
      });
    } else if (this.state.step === 2) {
      console.log('data', data);
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          grandKids: [...data]
        }
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
