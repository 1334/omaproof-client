import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import RegularLogin from './regularLogin';
import UserContext from '../contexts/userContext';
import GroupChooser from './groupChooser';

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
        )}
      </UserContext.Consumer>
    );
  }
}

export default Landing;
