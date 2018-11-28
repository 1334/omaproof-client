import React, { Component } from 'react';
import Member from './member';

class Members extends Component {
  state = {
    displayComponent: false,
    members: []
  };

  addMember = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          members: [
            ...this.state.members,
            {
              id: Math.floor(1000 + Math.random() * 9000),
              firstName: data.results[0].name.first,
              lastName: data.results[0].name.last,
              phoneNumber: data.results[0].phone,
              avatar: data.results[0].picture.thumbnail
            }
          ]
        });
      });
  };

  toggleModal = () => {
    this.setState({ displayComponent: !this.state.displayComponent });
  };

  createMember = member1 => {
    const newMemeber = {
      ...member1,
      id: Math.floor(1000 + Math.random() * 9000)
    };
    this.setState({
      members: [...this.state.members, newMemeber]
    });
    this.toggleModal();
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
    this.toggleModal();
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

  removeMember = memberone => {
    const newMembers = this.state.members.filter(member => {
      return member !== memberone;
    });
    this.setState({
      members: [...newMembers]
    });
  };

  passProps = () => {
    this.props.handleSubmit(this.state.members);
  };
  render() {
    return (
      <React.Fragment>
        <h2>Add members</h2> <br />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.members.map(member => {
              return (
                <tr key={member.id}>
                  <th scope="row" />
                  <td>
                    <img src={member.avatar} alt="portrait of member" />
                  </td>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.phoneNumber}</td>
                  <td>
                    <button
                      onClick={() => this.removeMember(member)}
                      type="button"
                      className="btn  btn-default btn-sm"
                    >
                      remove contact
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={this.addMember}>Add Member</button>
        <button type="button" onClick={this.toggleModal}>
          Add member manualy
        </button>
        {this.state.displayComponent ? (
          <Member
            text="Close Me"
            closePopup={this.toggleModal}
            submitMember={this.createMember}
            memberUpdate={this.memberOnChange}
          />
        ) : null}
        <br />
        <button onClick={this.passProps}> next </button>
      </React.Fragment>
    );
  }
}

export default Members;
