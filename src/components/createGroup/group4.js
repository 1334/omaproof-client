import React from 'react';
import styled from 'styled-components';
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  text-align: center;
  margin: 5vw;
`;

export default class Group4 extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div>
          <h1>CONGRATULATIONS</h1>
        </div>
        <div>
          {' '}
          {this.props.group.members[0].name}, you created group{' '}
          {this.props.group.description}. Enjoy the new way to connect with your
          family{' '}
        </div>
      </StyledHeader>
    );
  }
}
