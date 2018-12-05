import React from 'react';
import styled from 'styled-components';

import Tile from '../styledComponents/questionTile';
import Button from '../styledComponents/button';

const StyledOmaLogin = styled.div`
  padding: 0 5vw;

  .tiles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 5vw;
    margin: 1em auto;
  }

  h1 {
    font-size: 1.3rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 3px;
  }

  .icon-arrow-right {
    margin-top: 1em;
  }
`;

class OmaLogin extends React.Component {
  render() {
    return (
      <StyledOmaLogin>
        <h1>Select all the names of your grandchild</h1>
        <div className="tiles">
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
          <Tile text="None" q />
        </div>
        <div className="buttons">
          <Button>Contiue</Button>
        </div>
      </StyledOmaLogin>
    );
  }
}

export default OmaLogin;
