import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import UserContext from './contexts/userContext';
import Auth from './components/auth';
import NewPost from './components/newPost';
import NavBar from './components/navBar';
import Demo from './components/demo';
import GroupChooser from './components/groupChooser';
import Landing from './components/landing';
import Feed from './components/feed';

const lightTheme = {
  colors: {
    text: 'rgb(30,34,38)',
    textLight: 'rgb(119,119,119)',
    textPrimary: 'rgb(255,255,255)',
    bg: 'rgb(255,255,255)',
    primary: 'rgb(14,52,82)',
    bg2: 'rgb(246,244,234)'
  }
};

// const darkTheme = {
//   colors: {
//     text: 'rgb(225,221,217)',
//     textLight: 'rgb(119,119,119)',
//     textPrimary: 'rgb(255,255,255)',
//     bg: 'rgb(30,34,38)',
//     primary: 'rgb(125,125,125)',
//     bg2: 'rgb(30,34,38)'
//   }
// };

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,700');

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    font-family: 'Titillium Web', sans-serif;
    color: ${props => props.theme.colors.text};
  }

  input, textarea {
    font-size: 1rem;
    font-family: inherit;
    line-height: 1.5;
    resize: none;
    border-radius: 0;
  }

  a {
    text-decoration: none;
  }
`;

class App extends Component {
  state = {
    theme: lightTheme,
    user: {}
  };

  // {
  //   "userId": "cjp171pq4palt0a03j9x3i6lm",
  //   "activeGroup": "cjp1789vspd250a03xnzvr0ky",
  //   "iat": 1543655712
  // }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user')) || {
        id: '',
        name: 'Guest',
        profilePicture: '',
        activeGroup: '',
        groups: []
      }
    });
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          updateUser: user =>
            this.setState({ user: { ...this.state.user, ...user } }, () =>
              localStorage.setItem('user', JSON.stringify(this.state.user))
            )
        }}
      >
        <ThemeProvider theme={this.state.theme}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <div>
                <NavBar user={this.state.use || ''} />
                <Route path="/" exact component={Landing} key="landing" />
                <Route path="/feed" exact component={Feed} key="feed" />
                <Route path="/login" exact component={Auth} key="login" />
                <Route
                  path="/group-chooser"
                  exact
                  component={GroupChooser}
                  key="group"
                />
                <Route path="/demo" exact component={Demo} key="demo" />
                <Route
                  path="/new-post"
                  exact
                  component={NewPost}
                  key="new-post"
                />
              </div>
            </Router>
          </React.Fragment>
        </ThemeProvider>
      </UserContext.Provider>
    );
  }
}

export default App;
