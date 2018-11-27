import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.blue};
  color: white;
  height: 50px;
  padding: 0.5em 0;

  a {
    margin-right: 0.7em;
    color: white;
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <StyledNavBar>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/new-post">New Post</Link>
      </StyledNavBar>
    );
  }
}

export default NavBar;
