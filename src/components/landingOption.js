import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import RegularLogin from './regularLogin';
import UserContext from '../contexts/userContext';
import GroupChooser from './groupChooser';

const LandingBackground = styled.div`
  height: 94.5vh;
  background-image: url('https://res.cloudinary.com/truroer/image/upload/v1543845859/person-731423-blue-v4.jpg');
  background-size: auto 150%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 0 auto;

  & > * {
    margin: 0.5em 0;
  }
`;

class Landing extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <LandingBackground>
            <StyledLanding>
              <h1>Welcome to omaproof</h1>
              <Link to="/new-group">Create new group</Link>
              <div>or</div>
              {!user.userToken ? (
                <RegularLogin />
              ) : (
                <GroupChooser groups={user.groups} />
              )}
            </StyledLanding>
          </LandingBackground>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Landing;
