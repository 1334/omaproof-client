import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Grandchild from './grandchildren';

export default class Group3 extends React.Component {
  state = {
    grandKids: []
  };

  createGrandchild = child => {
    const newGrandChild = {
      ...child,
      id: Math.floor(1000 + Math.random() * 9000)
    };
    this.setState({
      grandKids: [...this.state.grandKids, newGrandChild]
    });
  };
  componentDidMount() {
    const newArr = this.props.group.members.filter(
      member => member.familyStatus === 'child'
    );
    this.setState({
      grandKids: [...newArr]
    });
  }

  passProps = () => {
    this.props.handleSubmit(this.state.grandKids);
  };
  render() {
    console.log('grandkids', this.state);
    console.log('props', this.props);

    return (
      <div>
        <p>grandkids </p>
        {this.state.grandKids.map(grandKid => {
          return (
            <ExpansionPanel key={grandKid.id}>
              <ExpansionPanelSummary>
                {grandKid.memberName}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="memberDetails">
                <FormControl>
                  <InputLabel>Name</InputLabel>
                  <Input
                    type="text"
                    name="memberName"
                    value={grandKid.memberName}
                    onChange={this.handleChangee}
                  />
                </FormControl>
                <div className="familyStatus">
                  <FormControl>
                    <InputLabel>Month</InputLabel>
                    <Input
                      type="number"
                      name="month"
                      value={grandKid.month}
                      onChange={this.handleChangee}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel>Year</InputLabel>
                    <Input
                      type="number"
                      name="year"
                      value={grandKid.year}
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
        })}
        <p>Add more grandchildren</p>
        <br />
        <Grandchild submitGrandChild={this.createGrandchild} />
        <button onClick={this.passProps}>next</button>
      </div>
    );
  }
}
