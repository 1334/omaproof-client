import React, { Component } from 'react';
import GroupInfo from './groupInfo';
import Members from './members';
import Questions from './questions';
import GroupEnd from './groupEnd';

class AdminView extends Component {
  state = {
    step: 0,
    displayComponent: false,
    isVisible: false,
    component: [GroupInfo, Members, Questions, GroupEnd],
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
        step: this.state.step + 1,
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
      this.setState({});
    }
  };
  render() {
    console.log('state', this.state);
    const ComponentType = this.state.component[this.state.step];
    const props = {
      handleSubmit: this.handleSubmit,
      key: this.state.step
      // style: `background-color: blue`
    };
    // if (ComponentType === Password) {
    //   props.question = questions[this.state.step - 1];
    // }
    return (
      <div className="auth">
        <ComponentType {...props} />
      </div>
    );
  }
}

export default AdminView;
