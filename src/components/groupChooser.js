import React from 'react';
import Button from '../styledComponents/button';
import { Mutation } from 'react-apollo';

import SELECT_GROUP from '../graphql/mutations/selectGroup';

class GroupChooser extends React.Component {
  state = {
    groupToken: localStorage.getItem('groupToken') || ''
  };

  render() {
    const groups = this.props.groups;
    const { groupToken } = this.state;

    return !groupToken.length ? (
      <Mutation mutation={SELECT_GROUP}>
        {(groupSelect, { loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>{error.message} :(</div>;
          return (
            <React.Fragment>
              {groups.length ? (
                groups.map(group => (
                  <Button
                    key={group.id}
                    onClick={() => {
                      groupSelect({ variables: { id: group.id } }).then(
                        ({ data }) => {
                          const groupToken = data.selectGroup.token;
                          this.setState({ groupToken });
                          localStorage.setItem('currentGroup', group.id);
                          localStorage.setItem('groupToken', groupToken);
                        }
                      );
                    }}
                  >
                    {group.description}
                  </Button>
                ))
              ) : (
                <div>No groups to select</div>
              )}
            </React.Fragment>
          );
        }}
      </Mutation>
    ) : null;
  }
}

export default GroupChooser;
