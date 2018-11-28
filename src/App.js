import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Mutation } from 'react-apollo';
import LOGIN_MUTATION from './graphql/mutations/login';

import Feed from './components/feed';
import Auth from './components/auth';
import NewPost from './components/newPost';
import NavBar from './components/navBar';
import AdminView from './components/admin-main';

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
  uri: 'http://localhost:4000',
  headers: {
    authorization: `Bearer ${localStorage.getItem('userToken')}`
  }
});

class App extends Component {
  state = {
    theme: 'default',
    user: { groups: [] }
  };

  componentDidMount() {
    this.setState({
      userToken: localStorage.getItem('userToken') || ''
    });
  }

  shouldComponentUpdate(_, nextState) {
    return this.state.user.id !== nextState.user.id ? true : false;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <div>
                {!this.state.user.id && (
                  <Mutation
                    mutation={LOGIN_MUTATION}
                    variables={{ contactNumber: 'codeworks', password: 'any' }}
                  >
                    {(login, { loading, error, called, data }) => {
                      if (loading) return <div>Loading...</div>;
                      if (error) return <div>There have been an error :(</div>;
                      if (data) {
                        {
                          const { user } = data.login;

                          const groups = user.groups.map(g => g.id);
                          this.setState({
                            user: { id: user.id, name: user.name, groups }
                          });
                          localStorage.setItem('userToken', data.login.token);
                        }
                        return null;
                      }
                      if (!called) {
                        {
                          login();
                        }
                        return null;
                      }
                    }}
                  </Mutation>
                )}
                <NavBar user={this.state.user} />
                <Route
                  path="/"
                  exact
                  key="home"
                  render={props => (
                    <Feed {...props} group={this.state.user.groups[0]} />
                  )}
                />
                <Route path="/login" exact component={Auth} key="login" />
                <Route
                  path="/new-group"
                  exact
                  component={AdminView}
                  key="new-group"
                />
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
