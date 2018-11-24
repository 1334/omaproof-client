import React, { Component } from 'react';
import Questions from './group-questions';
class GroupCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      groupDescription: '',
      step: 0,
      groupInformations: [],
      members: []
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  consoleLogThis = () => {
    console.log('this state on submit', this.state);
  };

  addMember = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          members: [
            ...this.state.members,
            {
              firstName: data.results[0].name.first,
              lastName: data.results[0].name.last,
              phoneNumber: data.results[0].phone,
              avatar: data.results[0].picture.thumbnail
            }
          ]
        });
      });
  };

  addGroupQA = () => {
    this.setState({
      groupInformations: [
        ...this.state.groupInformations,
        {
          id: Math.floor(1000 + Math.random() * 9000),
          question: '',
          answer: ''
        }
      ]
    });
  };

  gropuQuestionsOnChange = newQa => {
    const qas = this.state.groupInformations.map(qa => {
      if (qa.id === newQa.id) {
        return newQa;
      } else {
        return qa;
      }
    });
    this.setState({ groupInformations: qas });
  };

  removeMember = memberone => {
    const newMembers = this.state.members.filter(member => {
      return member !== memberone;
    });
    this.setState({
      members: [...newMembers]
    });
  };
  render() {
    const { members } = this.state;
    const { groupInformations } = this.state;

    return (
      <div>
        <div className="page1">
          <h3>Insert group name</h3>
          <input
            type="text"
            name="groupName"
            placeholder="GROUP NAME"
            onChange={this.onChange}
          />
          <h3>Set group discription</h3>
          <input
            type="text"
            name="groupDescription"
            placeholder="DESCRIPTION"
            onChange={this.onChange}
          />
          <br />
          <button>submit</button>
        </div>

        <hr />
        <div className="page2">
          <h2>Add members</h2> <br />
          <button onClick={this.addMember}>Add Member</button> <br />
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
              {members.map(member => {
                return (
                  <tr key={member.phoneNumber}>
                    <th scope="row">1</th>
                    <td>
                      <img src={member.avatar} alt="portrait of member" />
                    </td>
                    i<td>{member.firstName}</td>
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
          <button>submit</button>
        </div>

        <hr />
        <div className="page3">
          <h3>Set up group questions</h3> <br />
          <button onClick={this.addGroupQA}>add questions</button> <br />
          {groupInformations.map(el => (
            <Questions
              key={el.id}
              id={el.id}
              updateQuestions={this.gropuQuestionsOnChange}
            />
          ))}
          <button>submit</button>
        </div>
        <hr />
        <div className="page4">
          <h2>Your grp is ready</h2> <br />
          <button onClick={this.consoleLogThis}>Yay</button>
        </div>
      </div>
    );
  }
}

export default GroupCreation;
