import React, { Component } from 'react';

class Question extends Component {
  state = {
    question: '',
    answer: ''
  };

  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value }, () => {
      const newQuestion = { id: this.props.id, ...this.state };
      this.props.updateQuestions(newQuestion);
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

export default Question;
