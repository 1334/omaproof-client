import React from 'react';
import { Mutation } from 'react-apollo';

import UserContext from '../contexts/userContext';
import SELECT_GROUP from '../graphql/mutations/selectGroup';
import Button from '../styledComponents/button';
import { navigate } from '@reach/router';

class GroupChooser extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user, updateUser }) => (
          <Mutation mutation={SELECT_GROUP}>
            {(groupSelect, { loading, error }) => {
              console.log('gr', user.groups);
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error.message} :(</div>;
              return (
                <React.Fragment>
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
                </React.Fragment>
              );
            }}
          </Mutation>
        )}
      </UserContext.Consumer>
    );
  }
}

export default GroupChooser;
