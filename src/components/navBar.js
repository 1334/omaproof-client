import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import logo from '../assets/logo-w-small.png';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
  height: 50px;
  padding: 0.5em 14px;
  position: relative;

  a,
  div {
    margin-right: 0.7em;
    color: ${props => props.theme.colors.bg};
  }

  .profile-picture {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  .icon {
    font-size: 1.2rem;
  }

  .logo {
    flex-grow: 3;
    position: relative;

    img {
      margin-top: 0.3em;
      height: 2.2rem;
    }
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
      <StyledNavBar className="main-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="omaproof logo" />
          </Link>
        </div>
        {user.id ? (
          <React.Fragment>
            <Link to="/new-post" user={user}>
              New Post
            </Link>
            <Link to="/feed">Feed</Link>
            <a href="/theme" onClick={this.toggleTheme}>
              <span
                className={`icon ${
                  theme === 'light' ? 'icon-moon' : 'icon-sun'
                }`}
              />
            </a>
            <img
              className="profile-picture"
              src={user.picture || 'http://placehold.it/32x32'}
              alt={user.name}
            />
          </React.Fragment>
        ) : (
          <Link to="/regular-login">Login</Link>
        )}
      </StyledNavBar>
    );
  }
}

export default NavBar;
