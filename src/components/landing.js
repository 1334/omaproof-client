import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import RegularLogin from './regularLogin';
import UserContext from '../contexts/userContext';
import GroupChooser from './groupChooser';
import { Mutation } from 'react-apollo';
import GRAND_PARENT_LOGIN_MUTATION from '../graphql/mutations/grandParentLogin';
import Button from '../styledComponents/button';

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
                  OMA login
                </Button>
              )}
            </Mutation>
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
