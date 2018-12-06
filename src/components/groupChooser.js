import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import UserContext from '../contexts/userContext';
import SELECT_GROUP from '../graphql/mutations/selectGroup';
import Button from '../styledComponents/button';
import { navigate } from '@reach/router';

const StyledGroupChooser = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 1em auto;

  & > * {
    margin: 0.5em 0;
  }
`;

class GroupChooser extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user, updateUser }) => (
          <Mutation mutation={SELECT_GROUP}>
            {(groupSelect, { loading, error }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error.message} :(</div>;
              return (
                <StyledGroupChooser>
                  <h1>Please select a group</h1>
                  {user.groups ? (
                    user.groups.map(group => (
                      <Button
                        key={group.id}
                        onClick={() => {
                          groupSelect({
                            variables: { id: group.id, token: user.userToken }
                          }).then(({ data }) => {
                            const groupToken = data.selectGroup.token;
                            const activeGroup = data.selectGroup.group.id;
                            updateUser({ groupToken, activeGroup });
                            navigate('/feed');
                          });
                        }}
                      >
                        {group.description}
                      </Button>
                    ))
                  ) : (
                    <div>Group with id {user.activeGroup} selected</div>
                  )}
                </StyledGroupChooser>
              );
            }}
          </Mutation>
        )}
      </UserContext.Consumer>
    );
  }
}

export default GroupChooser;
