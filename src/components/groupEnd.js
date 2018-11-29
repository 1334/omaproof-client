import React from 'react';
import ButtonLarge from '../styledComponents/buttonLarge';
import './test.css';

export default class GroupEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('aaaaaa', this.props.group);
    return (
      <div className="groupInfo">
        <p>
          Congratulations you have created <b>{this.props.group.name}</b> group,
          that have <b>{this.props.group.description}</b> description about{' '}
          {this.props.group.description}
        </p>
        <ButtonLarge onClick={this.props.handleSubmit}>
          Proceed to group feed
        </ButtonLarge>
      </div>
    );
  }
}
