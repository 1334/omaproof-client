import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styledComponents/globalStyles';
import UserContext from './contexts/userContext';
import Auth from './components/auth';
import NewPost from './components/newPost';
import NavBar from './components/navBar';
import Demo from './components/demo';
import GroupChooser from './components/groupChooser';
import Landing from './components/landing';
import Feed from './components/feed';
import { lightTheme, darkTheme } from './themes/themes';

class App extends Component {
  state = {
    theme: true,
    user: {}
  };

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

  toggleTheme = () => {
    this.setState({ theme: !this.state.theme });
  };

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
        <ThemeProvider theme={this.state.theme ? lightTheme : darkTheme}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <div>
                <NavBar
                  theme={this.state.theme ? 'light' : 'dark'}
                  toggleTheme={this.toggleTheme}
                />
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
