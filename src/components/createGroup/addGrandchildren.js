import React from 'react';
import Button from '../../styledComponents/button';
import { Mutation } from 'react-apollo';
import UserContext from '../../contexts/userContext';
import CREATE_GROUP_MUTATION from '../../graphql/mutations/createGroup';

import styled from 'styled-components';

import Grandchild from './addGrandChild';

const StyledGrandChildren = styled.div`
  .member-info {
    background-color: ${props => props.theme.colors.bg};
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 5px 2px #ccc;

    img {
      margin: 0.5em 1em;
      width: 32px;
      height: 32px;
    }
  }

  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 20px auto;

  & > * {
    margin: 0.5em 0;
  }
  p {
    color: black;
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .text-p {
    text-align: center;
  }
  .memberCard {
    display: flex;
    padding: 2.5vh 7vw;
  }
  .test1 {
    display: flex;
    background-color: purple;
  }
  .memberCard img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .test2 {
    display: flex;
    align-self: center;
    padding-left: 6.1vw;
  }
  .next-button {
    display: flex;
    justify-content: flex-end;
  }
  .pic {
    width: 40px;
  }
`;

export default class AddGrandchildren extends React.Component {
  state = {
    grandChildren: []
  };

  createGrandchild = child => {
    this.setState({
      grandChildren: [...this.state.grandChildren, child]
    });
  };
  componentDidMount() {
    const newArr = this.props.group.members.filter(
      member => member.generation === 'CHILD'
    );
    this.setState({
      grandChildren: newArr
    });
  }

  passProps = () => {
    this.props.handleSubmit(this.state.grandChildren);
  };
  render() {
    const { user } = this.props;
    return (
      <StyledGrandChildren>
        <h1>Grandchildren</h1>
        {this.state.grandChildren.map(grandChild => {
          return (
            <div key={grandChild.picture} className="member-info">
              <img src={grandChild.picture} alt="taken" className="pic" />
              <div>{grandChild.name}</div>
            </div>
          );
        })}

        <div className="text-p">
          To provide secure authentication, please add more grandhildren{' '}
        </div>
        <br />
        <Grandchild submitGrandChild={this.createGrandchild} />
        <div className="next-button">
          <UserContext.Consumer>
            {({ updateUser }) => (
              <Mutation
                mutation={CREATE_GROUP_MUTATION}
                variables={{
                  welcomeText: this.props.group.welcomeText,
                  description: this.props.group.description,
                  members: this.props.group.members,
                  grandChildren: this.state.grandChildren,
                  token: user.userToken
                }}
              >
                {createGroup => (
                  <Button
                    onClick={() => {
                      createGroup().then(({ data }) => {
                        const user = {
                          activeGroup: data.createGroup.group.id,
                          groupToken: data.createGroup.token
                        };
                        updateUser(user);

                        this.passProps();
                      });
                    }}
                  >
                    Create Group
                  </Button>
                )}
              </Mutation>
            )}
          </UserContext.Consumer>
        </div>
      </StyledGrandChildren>
    );
  }
}
