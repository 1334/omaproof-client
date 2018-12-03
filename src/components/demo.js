import React from 'react';
import styled from 'styled-components';

import Tile from '../styledComponents/questionTile';

const StyledDemo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  /* height: 87vh; */
  grid-gap: 20px;
  width: 90vw;
  margin: 1em auto;
`;

class Demo extends React.Component {
  render() {
    return (
      <StyledDemo>
        <Tile text="Frederik" />
        <Tile text="Jovan" />
        <Tile text="Maxim" />
        <Tile text="Cristina" />
        <Tile text="Arol" />
        <Tile text="Sarah" />
        <Tile text="Marco" />
        <Tile text="Indi" />
        <Tile text="Laura" />
        <Tile text="Alice" />
        <Tile text="Sonia" />
        <Tile text="None" />
      </StyledDemo>
    );
  }
}

export default Demo;
