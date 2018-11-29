import React from 'react';
import { Mutation } from 'react-apollo';
import LOGIN_MUTATION from '../graphql/mutations/login';
import Button from '../styledComponents/button';
import GroupChooser from './groupChooser';

class Authenticator extends React.Component {
  state = {
    userToken: localStorage.getItem('userToken') || '',
    groups: []
  };

  render() {
    const { groups } = this.state;

    return !groups.length ? (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ contactNumber: 'codeworks', password: 'any' }}
      >
        {(login, { loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>{error.message} :(</div>;
          return (
            <Button
              onClick={() => {
                login().then(({ data }) => {
                  const groups = data.login.user.groups;
                  this.setState({ groups });
                  localStorage.setItem('userToken', data.login.token);
                });
              }}
            >
              Login
            </Button>
          );
        }}
      </Mutation>
    ) : (
      <GroupChooser groups={this.state.groups} />
    );
  }
}

export default Authenticator;

// {true && (
//   <Mutation
//     mutation={LOGIN_MUTATION}
//     variables={{ contactNumber: 'codeworks', password: 'any' }}
//   >
//     {(login, { loading, error, called, data }) => {
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>There have been an error :(</div>;
//       if (data) {
//         {
//           const { user } = data.login;

//           const groups = user.groups.map(g => g.id);
//           this.setState({
//             user: { id: user.id, name: user.name, groups }
//           });
//           localStorage.setItem('token', data.login.token);
//         }
//         return null;
//       }
//       if (!called) {
//         {
//           login();
//         }
//         return null;
//       }
//     }}
//   </Mutation>
// )}
