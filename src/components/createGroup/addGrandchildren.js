import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Grandchild from './addGrandChild';

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
      member => member.familyStatus === 'child'
    );
    this.setState({
      grandChildren: [...newArr]
    });
  }

  passProps = () => {
    this.props.handleSubmit(this.state.grandChildren);
  };
  render() {
    console.log('grandChildren', this.state);
    console.log('props', this.props);

    return (
      <div>
        <p>grandChildren </p>
        {this.state.grandChildren.map(grandChild => {
          return (
            <ExpansionPanel key={grandChild.id}>
              <ExpansionPanelSummary>
                {grandChild.memberName}
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
