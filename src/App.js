import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Feed from './components/feed';
import Auth from './components/auth';
import NewPost from './components/newPost';
import NavBar from './components/navBar';
import Authenticator from './components/authenticator';

const theme = {
  colors: {
    black: 'rgb(30,34,38)',
    grey: 'rgb(119,119,119)',
    blue: 'rgb(14,52,82)',
    creme: 'rgb(246,244,234)'
  }
};

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

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:4000`,
  headers: {
    authorization: `Bearer ${localStorage.getItem('groupToken') ||
      localStorage.getItem('userToken')}`
  }
});

class App extends Component {
  state = {
    theme: 'default'
  };

  componentDidMount() {
    this.setState({
      userToken: localStorage.getItem('userToken') || ''
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <div>
                <NavBar user={this.state.use || ''} />
                <Authenticator />
                <Route path="/" exact component={Feed} key="home" />
                <Route path="/login" exact component={Auth} key="login" />
                <Route
                  path="/new-post"
                  exact
                  component={NewPost}
                  key="new-post"
                />
              </div>
            </Router>
          </React.Fragment>
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default App;
