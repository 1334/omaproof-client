import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
  height: 50px;
  padding: 0.5em 14px;

  a,
  div {
    margin-right: 0.7em;
    color: ${props => props.theme.colors.bg};
  }

  img {
    border-radius: 50%;
  }

  .icon {
    font-size: 1.2rem;
  }
`;

class NavBar extends React.Component {
  toggleTheme = e => {
    e.preventDefault();
    this.props.toggleTheme();
  };

  render() {
    const { theme, user } = this.props;
    return (
      <StyledNavBar>
        <Link to="/new-post" user={user}>
          New Post
        </Link>
        <Link to="/feed">Feed</Link>
        <Link to="/">Login</Link>
        <a href="/theme" onClick={this.toggleTheme}>
          <span
            className={`icon ${theme === 'light' ? 'icon-moon' : 'icon-sun'}`}
          />
        </a>
        <img
          src={user.profilePicture || 'http://placehold.it/32x32'}
          alt={user.name}
        />
      </StyledNavBar>
    );
  }
}

export default NavBar;
