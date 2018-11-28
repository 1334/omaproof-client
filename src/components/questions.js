import React, { Component } from 'react';

class Questions extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>questions</h3>
        <button onClick={this.props.handleSubmit}> next </button>
      </React.Fragment>
    );
  }
}

export default Questions;
