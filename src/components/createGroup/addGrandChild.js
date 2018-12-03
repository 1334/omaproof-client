import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default class Grandchild extends React.Component {
  state = {
    memberName: '',
    familyStatus: 'child',
    month: '',
    year: '',
    picture: ''
  };
  handleChangee = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  createMember = () => {
    this.props.submitGrandChild(this.state);
    this.setState({
      memberName: '',
      month: '',
      year: '',
      picture: ''
    });
  };

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <p> Grandchild </p>
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
          <input
            accept="image/*"
            name="picture"
            id="media"
            type="file"
            ref={this.fileInput}
          />
          <br />

          <button onClick={this.createMember}>Done</button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
