import React from 'react';
import styled from 'styled-components';

import Tile from '../styledComponents/questionTile';
import Button from '../styledComponents/button';
import GRAND_PARENT_LOGIN_MUTATION from '../graphql/mutations/grandParentLogin';
import { Mutation } from 'react-apollo';

const StyledOmaLogin = styled.div`
  padding: 0 5vw;

  .tiles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 5vw;
    margin: 1em auto;
  }

  h1 {
    font-size: 1.3rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 3px;
  }

  .icon-arrow-right {
    margin-top: 1em;
  }
`;

class OmaLogin extends React.Component {
  state = {
    token: '',
    questions: [],
    type: '',
    questionText: {
      GrandParent_MonthOfBirth: 'Please select your month of birth', //date
      GrandChildren_MonthsOfBirth:
        'Please select all months in which one of your grandchildren were born', //date
      GrandChildren_Names:
        'Please select all the names that match any of your grandchildren or press next if none match', //names
      GrandParent_ContactNumber: 'please dial in your cellphone number', //number
      GrandChildren_Authorization_Pictures:
        'Please the pictures of your grandchildren for our final verification', //pics
      Select_right_familymember: 'Who are you?',
      success: 'Welcome Oma',
      failure: 'Go away hacker!'
    },
    selected: []
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    const loginInfo = JSON.parse(localStorage.getItem('omalogin'));

    this.setState({
      token: loginInfo.token,
      questions: loginInfo.question.options,
      type: loginInfo.question.type,
      selected: []
    });
  };

  selectOption = (tile, selected) => {
    if (selected) {
      this.setState({ selected: [...this.state.selected, tile] }, () => {
        console.log(this.state.selected, this.unselectedAnswers());
      });
    } else {
      const selected = this.state.selected.filter(el => el !== tile);
      this.setState({ selected: [...selected] }, () => {
        console.log(this.state.selected, this.unselectedAnswers());
      });
    }
  };

  unselectedAnswers() {
    return this.state.questions.filter(el => !this.state.selected.includes(el));
  }

  render() {
    return (
      <StyledOmaLogin>
        <h1>{this.state.questionText[this.state.type]}</h1>
        <div className="tiles">
          {this.state.questions.map(question => (
            <Tile
              text={question}
              key={question + '.' + this.state.type}
              onSelect={this.selectOption}
            />
          ))}
        </div>
        <div className="buttons">
          <Mutation
            mutation={GRAND_PARENT_LOGIN_MUTATION}
            variables={{
              sessionToken: this.state.token,
              selected: this.state.selected,
              unselected: this.unselectedAnswers(),
              type: this.state.type
            }}
          >
            {omaLogin => (
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  omaLogin().then(({ data }) => {
                    console.log('sdfsdf', data);

                    localStorage.setItem(
                      'omalogin',
                      JSON.stringify(data.grandParentLogin)
                    );
                    this.updateState();
                    // navigate('/oma-login');
                  });
                }}
              >
                Continue
              </Button>
            )}
          </Mutation>
        </div>
      </StyledOmaLogin>
    );
  }
}

export default OmaLogin;
