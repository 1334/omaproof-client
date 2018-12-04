import React from 'react';
import Member from './member';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
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
    // console.log('page2', this.state);
    return (
      <StyledMembers>
        <p>members</p>
        {this.state.members.map(member => {
          return (
            <ExpansionPanel key={member.id}>
              <ExpansionPanelSummary>{member.memberName}</ExpansionPanelSummary>
            </ExpansionPanel>
          );
        })}

        <Member submitMember={this.createMember} />
        <div>
          <Button onClick={this.passProps}>next</Button>
        </div>
      </StyledMembers>
    );
  }
}
