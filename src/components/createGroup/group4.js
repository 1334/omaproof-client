import React from 'react';

export default class Group4 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>WELCOME</h1>
        <p>
          {' '}
          {this.props.group.members[0].memberName}, you created group{' '}
          {this.props.group.name} enjoy new way to reconnect with your family{' '}
        </p>
      </React.Fragment>
    );
  }
}
