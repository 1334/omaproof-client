import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Feed from './components/feed';
import Auth from './components/auth';

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
              </ul>
            </nav>
            <Route path="/" exact component={Feed} key="home" />
            <Route path="/login" exact component={Auth} key="login" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
