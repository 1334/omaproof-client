import React, { Component } from 'react';
import Question from './question';

class Questions extends Component {
  state = {
    security: []
  };

  addQuestion = () => {
    this.setState({
      security: [
        ...this.state.security,
        {
          id: Math.floor(1000 + Math.random() * 9000),
          question: '',
          answer: ''
        }
      ]
    });
  };

  gropuQuestionsOnChange = newQuestion => {
    const questionA = this.state.security.map(qa => {
      if (qa.id === newQuestion.id) {
        return newQuestion;
      } else {
        return qa;
      }
    });
    this.setState({ security: questionA });
  };

  passProps = () => {
    this.props.handleSubmit(this.state.security);
  };

  render() {
    return (
      <React.Fragment>
        <h3>questions</h3>
        <h3>Set up group questions</h3> <br />
        {this.state.security.map(el => (
          <Question
            key={el.id}
            id={el.id}
            updateQuestions={this.gropuQuestionsOnChange}
          />
        ))}
        <button onClick={this.addQuestion}>add questions</button> <br />
        <button onClick={this.passProps}> next </button>
      </React.Fragment>
    );
  }
}

export default Questions;
