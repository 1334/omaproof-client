import React from 'react';
import styled from 'styled-components';
import { Redirect, navigate } from '@reach/router';

import QuestionTile from '../styledComponents/questionTile';
import ImageTile from '../styledComponents/imageTile';
import Button from '../styledComponents/button';
import GRAND_PARENT_LOGIN_MUTATION from '../graphql/mutations/grandParentLogin';
import { Mutation } from 'react-apollo';
import UserContext from '../contexts/userContext';

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
        'Please select the pictures of your grandchildren for our final verification', //pics
      Select_right_familymember: 'Who are you?',
      success: 'Welcome Oma',
      failure: 'Go away hacker!'
    },
    selected: [],
    tileType: QuestionTile
  };

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    const loginInfo = JSON.parse(localStorage.getItem('omalogin'));

    if (!loginInfo) return navigate('/');

    const tileType =
      loginInfo.question.type === 'GrandChildren_Authorization_Pictures'
        ? ImageTile
        : QuestionTile;

    this.setState({
      token: loginInfo.token,
      questions: loginInfo.question.options,
      type: loginInfo.question.type,
      selected: [],
      tileType
    });
  };

  selectOption = (tile, selected) => {
    if (selected) {
      this.setState({ selected: [...this.state.selected, tile] });
    } else {
      const selected = this.state.selected.filter(el => el !== tile);
      this.setState({ selected: [...selected] });
    }
  };

  unselectedAnswers() {
    return this.state.questions.filter(el => !this.state.selected.includes(el));
  }

  render() {
    if (!localStorage.getItem('omalogin')) {
      return <Redirect to="/" noThrow />;
    }
    const TileType = this.state.tileType;

    return (
      <UserContext.Consumer>
        {({ updateUser }) => (
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
              <StyledOmaLogin>
                <h1>{this.state.questionText[this.state.type]}</h1>
                <div className="tiles">
                  {this.state.questions.map(question => (
                    <TileType
                      text={question}
                      key={question + '.' + this.state.type}
                      onSelect={this.selectOption}
                    />
                  ))}
                </div>
                <div className="buttons">
                  <Button
                    type="submit"
                    onClick={e => {
                      e.preventDefault();
                      omaLogin().then(({ data }) => {
                        const questionType =
                          data.grandParentLogin.question.type;

                        if (questionType === 'success') {
                          const user = JSON.parse(
                            data.grandParentLogin.question.options[1]
                          );
                          updateUser({
                            ...user,
                            userToken: data.grandParentLogin.token
                          });
                          return navigate('/group-chooser');
                        }

                        localStorage.setItem(
                          'omalogin',
                          JSON.stringify(data.grandParentLogin)
                        );
                        this.updateState();
                      });
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </StyledOmaLogin>
            )}
          </Mutation>
        )}
      </UserContext.Consumer>
    );
  }
}

export default OmaLogin;
