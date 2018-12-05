import React from 'react';
import Member from './member';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '../../styledComponents/button';
import styled from 'styled-components';

const StyledMembers = styled.div`
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
export default class AddMembers extends React.Component {
  state = {
    displayComponent: false,
    members: [...this.props.group.members]
  };

  createMember = member1 => {
    const newMemeber = {
      ...member1,
      id: Math.floor(1000 + Math.random() * 9000)
    };
    this.setState({
      members: [...this.state.members, newMemeber]
    });
  };

  addMemberId = () => {
    this.setState({
      members: [
        ...this.state.members,
        {
          id: Math.floor(1000 + Math.random() * 9000)
        }
      ]
    });
  };
  memberOnChange = newMember => {
    const moo = this.state.members.map(member => {
      if (member.id === newMember.id) {
        return newMember;
      } else {
        return member;
      }
    });
    this.setState({ members: moo });
  };
  passProps = () => {
    this.props.handleSubmit(this.state.members);
  };
  render() {
    console.log('page2', this.props);
    return (
      <StyledMembers>
        <p
          style={{
            marginTop: '0',
            marginBottom: '3vh'
          }}
        >
          Members
        </p>
        {this.state.members.map(member => {
          return (
            <div
              key={member.id}
              style={{
                margin: '0.5vh 0'
              }}
            >
              <ExpansionPanel key={member.id}>
                <ExpansionPanelSummary>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '4vh'
                    }}
                  >
                    <img src={member.mediaUrl} className="pic" />
                    <div
                      style={{
                        marginLeft: '5vw'
                      }}
                    >
                      <p>{member.memberName}</p>
                    </div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="memberDetails">
                  <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input
                      type="text"
                      name="memberName"
                      value={member.memberName}
                      onChange={this.handleChangee}
                    />
                  </FormControl>
                  <div className="familyStatus">
                    <FormControl>
                      <InputLabel>Month</InputLabel>
                      <Input
                        type="number"
                        name="month"
                        value={member.month}
                        onChange={this.handleChangee}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel>Year</InputLabel>
                      <Input
                        type="number"
                        name="year"
                        value={member.year}
                        onChange={this.handleChangee}
                      />
                    </FormControl>
                  </div>

                  <br />

                  <Button>Edit member</Button>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          );
        })}

        <Member submitMember={this.createMember} />
        <div className="next-button">
          <Button onClick={this.passProps}>next</Button>
        </div>
      </StyledMembers>
    );
  }
}
