import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './test.css';

export default class Member extends React.Component {
  state = {
    memberName: '',
    phoneNumber: '',
    familyStatus: '',
    month: '',
    year: '',
    status: 'member',
    expanded: false
  };

  handleChangee = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };
  handleClick = event => {
    const target = event.target;
    this.setState({ familyStatus: target.name });
  };
  createMember = () => {
    this.props.submitMember(this.state);
    this.setState({
      memberName: '',
      phoneNumber: '',
      familyStatus: '',
      month: '',
      year: '',
      expanded: false
    });
  };

  render() {
    return (
      <ExpansionPanel expanded={this.state.expanded}>
        <ExpansionPanelSummary
          onClick={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <p> member </p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="memberDetails">
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input
              type="text"
              name="memberName"
              value={this.state.memberName}
              onChange={this.handleChangee}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChangee}
            />
          </FormControl>
          <div className="familyStatus">
            <FormControl>
              <InputLabel>Month</InputLabel>
              <Input
                type="number"
                name="month"
                value={this.state.month}
                onChange={this.handleChangee}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Year</InputLabel>
              <Input
                type="number"
                name="year"
                value={this.state.year}
                onChange={this.handleChangee}
              />
            </FormControl>
          </div>
          <br />
          <div className="familyStatus">
            <button
              className="buttonMember"
              name="child"
              onClick={this.handleClick}
            >
              child
            </button>
            <button
              className="buttonMember"
              name="parent"
              onClick={this.handleClick}
            >
              parent
            </button>
            <button
              className="buttonMember"
              name="grandparent"
              onClick={this.handleClick}
            >
              grandparent
            </button>
          </div>
          <br />

          <button onClick={this.createMember}>Done</button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
