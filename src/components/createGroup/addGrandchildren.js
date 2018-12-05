import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '../../styledComponents/button';
import { Mutation } from 'react-apollo';
import CREATE_GROUP_MUTATION from '../../graphql/mutations/createGroup';

import styled from 'styled-components';

import Grandchild from './addGrandChild';

const StyledGrandChildren = styled.div`
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
    const newGrandChild = {
      ...child,
      id: Math.floor(1000 + Math.random() * 9000)
    };
    this.setState({
      grandChildren: [...this.state.grandChildren, newGrandChild]
    });
  };
  componentDidMount() {
    const newArr = this.props.group.members.filter(
      member => member.familyStatus === 'CHILD'
    );
    this.setState({
      grandChildren: [...newArr]
    });
  }

  passProps = () => {
    this.props.handleSubmit(this.state.grandChildren);
  };
  render() {
    const { user } = this.props;
    return (
      <StyledGrandChildren>
        <div
          style={{
            marginTop: '0',
            marginBottom: '3vh'
          }}
        >
          Grandchildren{' '}
        </div>
        {this.state.grandChildren.map(grandChild => {
          return (
            <div
              key={grandChild.id}
              style={{
                margin: '0.5vh 0'
              }}
            >
              <ExpansionPanel key={grandChild.id}>
                <ExpansionPanelSummary>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '4vh'
                    }}
                  >
                    <img src={grandChild.mediaUrl} className="pic" />
                    <div
                      style={{
                        marginLeft: '5vw'
                      }}
                    >
                      <p>{grandChild.memberName}</p>
                    </div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="memberDetails">
                  <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input
                      type="text"
                      name="memberName"
                      value={grandChild.memberName}
                      onChange={this.handleChangee}
                    />
                  </FormControl>
                  <div className="familyStatus">
                    <FormControl>
                      <InputLabel>Month</InputLabel>
                      <Input
                        type="number"
                        name="month"
                        value={grandChild.month}
                        onChange={this.handleChangee}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel>Year</InputLabel>
                      <Input
                        type="number"
                        name="year"
                        value={grandChild.year}
                        onChange={this.handleChangee}
                      />
                    </FormControl>
                  </div>
                  <br />

                  <Button onClick={this.createMember}>Edit grandchild</Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          );
        })}
        <div className="text-p">
          To provide secure authentication, please add more grandhildren{' '}
        </div>
        <br />
        <Grandchild submitGrandChild={this.createGrandchild} />
        <div className="next-button">
          <Mutation
            mutation={CREATE_GROUP_MUTATION}
            variables={{
              welcomeText: this.props.group.welcomeMsg,
              description: this.props.group.name,
              members: this.props.group.members,
              grandChildren: this.props.group.grandChildren,
              token: user.groupToken
            }}
          >
            {createPost => (
              <Button
                onClick={() => {
                  this.passProps();
                  createPost();
                }}
              >
                Create Group
              </Button>
            )}
          </Mutation>
        </div>
      </StyledGrandChildren>
    );
  }
}
