import React from 'react';
import Member from './member';
import Button from '../../styledComponents/button';
import styled from 'styled-components';

const StyledMembers = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;

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

  & > * {
    margin: 0.5em 0;
  }

  h1 {
    margin-top: 1.5em;
  }

  p {
    color: black;
  }
  img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
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
    width: 32px;
    height: 32px;
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
    width: 32px;
  }
`;
export default class AddMembers extends React.Component {
  state = {
    displayComponent: false,
    members: []
  };

  componentDidMount() {
    this.setState({ members: this.props.group.members });
  }

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
    return (
      <StyledMembers>
        <h1>Members</h1>
        {this.state.members.map(member => {
          return (
            <div key={member.contactNumber} className="member-info">
              <img src={member.picture} alt="taken" className="pic" />
              <div>{member.name}</div>
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
