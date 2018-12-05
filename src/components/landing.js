import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import Button from '../styledComponents/button';
import { navigate } from '@reach/router';

import { Mutation } from 'react-apollo';
import GRAND_PARENT_LOGIN_MUTATION from '../graphql/mutations/grandParentLogin';
import Logo from '../styledComponents/logo';

const LandingBackground = styled.div`
  background: url('https://res.cloudinary.com/truroer/image/upload/v1544016596/allen-taylor-709552-unsplash_copy.jpg')
    no-repeat center center fixed;
  background-size: cover;
`;

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
  align-items: center;

  h3 {
    margin-top: 2em;
  }

  & > * {
    margin: 0.5em 0;
  }

  .links {
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
  }

  .lg {
    font-family: 'Lily Script One', cursive;
    color: ${props => props.theme.colors.bg};
  }

  .svg-logo {
    height: 8.2rem !important;
    margin: 2em auto;
  }

  .lg1 {
    font-family: 'Lily Script One', cursive;
    color: ${props => props.theme.colors.bg};
  }
  .buttonLanding {
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.primary};
  }
`;

class Landing extends React.Component {
  render() {
    return (
      <LandingBackground>
        <StyledLanding>
          <h3 className="lg">Welcome to </h3>
          <div className="omaproof lg">
            <Logo />
          </div>
          <div className="lg">a family friendly way to connect...</div>

          <div
            style={{
              marginTop: '5vh',
              height: '40vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Link to="/create-group">
              <Button
                className="buttonLanding"
                style={{
                  width: '50vw',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div>Create new group</div>
              </Button>
            </Link>

            <div className="lg">OR</div>
            <Mutation
              mutation={GRAND_PARENT_LOGIN_MUTATION}
              variables={{
                sessionToken: null,
                selected: [],
                unselected: []
              }}
            >
              {omaLogin => (
                <Button
                  type="submit"
                  className="buttonLanding"
                  style={{
                    width: '80vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4vw',
                    fontSize: '6vw',
                    marginBottom: '5vh'
                  }}
                  onClick={e => {
                    e.preventDefault();
                    omaLogin().then(({ data }) => {
                      localStorage.setItem(
                        'omalogin',
                        JSON.stringify(data.grandParentLogin)
                      );
                      navigate('/oma-login');
                    });
                  }}
                >
                  <span style={{ marginRight: '3vw' }}>
                    Oma, click to start{' '}
                  </span>
                  <span className="icon-arrow-right" />
                </Button>
              )}
            </Mutation>

            <span>
              <span className="lg1">You can also </span>
              <Link to="/regular-login" className="links lg">
                Log in with password
              </Link>
            </span>
          </div>
        </StyledLanding>
      </LandingBackground>
    );
  }
}

export default Landing;
