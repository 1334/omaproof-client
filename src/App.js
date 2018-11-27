import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Feed from './components/feed';
import Auth from './components/auth';
import NewPost from './components/newPost';

const theme = {
  black: 'rgb(30,34,38)',
  grey: 'rgb(119,119,119)',
  blue: 'rgb(14,52,82)',
  creme: 'rgb(246,244,234)'
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,700');

  * {
    font-family: 'Titillium Web', sans-serif;
  }
`;

class App extends Component {
  state = {
    theme: 'default'
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/new-post">New Post</Link>
                  </li>
                </ul>
              </nav>
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
      </ThemeProvider>
    );
  }
}

export default App;
