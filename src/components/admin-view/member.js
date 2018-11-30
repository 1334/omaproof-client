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
    month: null,
    year: null
  };
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <p> member </p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="memberDetails">
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type="text" name="memberName" />
          </FormControl>
          <FormControl>
            <InputLabel>Phone #</InputLabel>
            <Input type="text" name="phoneNumber" />
          </FormControl>
          <div className="familyStatus">
            <FormControl>
              <InputLabel>Month</InputLabel>
              <Input type="text" name="month" />
            </FormControl>
            <FormControl>
              <InputLabel>Year</InputLabel>
              <Input type="text" name="year" />
            </FormControl>
          </div>
          <div className="familyStatus">
            <button className="buttonMember">child</button>
            <button className="buttonMember">parent</button>
            <button className="buttonMember">grandparent</button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
