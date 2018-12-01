import React from 'react';
import { Mutation } from 'react-apollo';

import UserContext from '../contexts/userContext';
import SELECT_GROUP from '../graphql/mutations/selectGroup';
import Button from '../styledComponents/button';

class GroupChooser extends React.Component {
  render() {
    const groups = this.props.groups;

    return (
      <UserContext.Consumer>
        {({ user, updateUser }) => (
          <Mutation mutation={SELECT_GROUP}>
            {(groupSelect, { loading, error }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error.message} :(</div>;
              return (
                <React.Fragment>
                  {!user.groupToken ? (
                    groups.map(group => (
                      <Button
                        key={group.id}
                        onClick={() => {
                          groupSelect({
                            variables: { id: group.id, token: user.userToken }
                          }).then(({ data }) => {
                            const groupToken = data.selectGroup.token;
                            updateUser({ groupToken });
                          });
                        }}
                      >
                        {group.description}
                      </Button>
                    ))
                  ) : (
                    <div>Group with token {user.groupToken} selected</div>
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
