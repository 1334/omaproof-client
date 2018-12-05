import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import UserContext from '../contexts/userContext';
import LOGIN_MUTATION from '../graphql/mutations/login';
import Button from '../styledComponents/button';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 0 auto;

  & > * {
    margin: 0.5em 0;
  }
`;

class RegularLogin extends React.Component {
  state = {
    login: '+36 509 590',
    password: ''
  };

  handleClick = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ updateUser }) => (
          <Mutation
            mutation={LOGIN_MUTATION}
            variables={{
              contactNumber: this.state.login,
              password: this.state.password
            }}
          >
            {(login, other) => {
              const { loading, error } = other;

              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error.message} :(</div>;
              return (
                <StyledLogin>
                  <label htmlFor="login">login</label>
                  <input
                    type="text"
                    name="login"
                    id="login"
                    value={this.state.login}
                    onChange={this.handleClick}
                  />
                  <label htmlFor="password">password</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleClick}
                  />
                  <Button
                    type="submit"
                    onClick={() => {
                      login().then(({ data }) => {
                        const user = {
                          ...data.login.user,
                          userToken: data.login.token
                        };
                        updateUser(user);
                      });
                    }}
                  >
                    Login
                  </Button>
                </StyledLogin>
              );
            }}
          </Mutation>
        )}
      </UserContext.Consumer>
    );
  }
}

export default RegularLogin;
