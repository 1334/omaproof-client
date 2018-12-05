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
      welcomeText: '',
      members: [],
      grandChildren: [],
      description: ''
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
          members: [data]
        }
      });
    } else if (this.state.step === 1) {
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          welcomeText: data.welcomeText,
          description: data.description
        }
      });
    } else if (this.state.step === 2) {
      const correctedData = data.map(el => {
        console.log('Generation', el.generation);
        return {
          name: el.name,
          contactNumber: el.contactNumber,
          monthOfBirth: el.monthOfBirth,
          yearOfBirth: el.yearOfBirth,
          picture: el.picture,
          generation: el.generation
        };
      });
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          members: [...correctedData]
        }
      });
    } else if (this.state.step === 3) {
      const correctedData = data.map(el => {
        return {
          name: el.name,
          contactNumber: el.contactNumber,
          monthOfBirth: el.monthOfBirth,
          yearOfBirth: el.yearOfBirth,
          picture: el.picture,
          generation: el.generation
        };
      });
      console.log('inside 3: ', correctedData);
      this.setState({
        step: this.state.step + 1,
        group: {
          ...this.state.group,
          grandChildren: [...correctedData]
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
    console.log('props: ', props);
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
