import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
  height: 50px;
  padding: 0.5em 0;

  a,
  div {
    margin-right: 0.7em;
    color: ${props => props.theme.colors.bg};
  }
`;

class NavBar extends React.Component {
  toggleTheme = e => {
    e.preventDefault();
    this.props.toggleTheme();
  };

  render() {
    return (
      <StyledNavBar>
        <a href="/theme" onClick={this.toggleTheme}>
          {this.props.theme}
        </a>
        <Link to="/feed">Feed</Link>
        <Link to="/">Login</Link>
      </StyledNavBar>
    );
  }
}

export default NavBar;
