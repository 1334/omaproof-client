import React, { Component } from 'react';

class Questions extends Component {
  state = {
    question: '',
    answer: ''
  };

  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value }, () => {
      const newQa = { id: this.props.id, ...this.state };
      this.props.updateQuestions(newQa);
    });
  };

  render() {
    return (
      <div>
        <h2>Question</h2>
        <br />
        <h2>Answer</h2>
        <input
          type="text"
          name="answer"
          placeholder="GROUP answer"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Questions;
