import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Feed from './components/feed';
import Auth from './components/auth';
import NewPost from './components/newPost';

class App extends Component {
  render() {
    return (
      <div className="App">
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
            <Route path="/new-post" exact component={NewPost} key="new-post" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
