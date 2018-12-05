import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import Button from '../styledComponents/button';
import { navigate } from '@reach/router';

import UserContext from '../contexts/userContext';
import GroupChooser from './groupChooser';
import { Mutation } from 'react-apollo';
import GRAND_PARENT_LOGIN_MUTATION from '../graphql/mutations/grandParentLogin';
import Button from '../styledComponents/button';

const LandingBackground = styled.div`
  height: 94vh;
  background-image: url('https://res.cloudinary.com/truroer/image/upload/v1544016596/allen-taylor-709552-unsplash_copy.jpg');
  background-size: auto 110%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
  align-items: center;

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

  .omaproof {
    text-align: center;
    font-family: 'Montez', cursive;
    font-size: 10vh;
    margin: 0;
    font-weight: bold;
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
      <UserContext.Consumer>
        {({ user }) => (
          <LandingBackground>
            <StyledLanding>
              <h3 className="lg">Welcome to </h3>
              <div className="omaproof lg">OmaProof</div>
              <div className="lg">a family friendly way to connect...</div>

              <div
                style={{
                  marginTop: '40vw',
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
                      marginBottom: '10vh'
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
                {!user.userToken ? (
                  <span>
                    <span className="lg1">You can also </span>
                    <Link to="/regular-login" className="links lg">
                      Log in with password
                    </Link>
                  </span>
                ) : (
                  <GroupChooser groups={user.groups} />
                )}
              </div>
            </StyledLanding>
          </LandingBackground>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Landing;
