import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to omaproof</h1>
        <Link to="/new-group">Create new group</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Landing;
