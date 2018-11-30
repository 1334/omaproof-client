import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDemo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 87vh;
  grid-gap: 20px;
  width: 90vw;
  margin: 1em auto;

  .item {
    text-align: center;
    background-color: ${props => props.theme.colors.bg2};
    border-radius: 10px;
    box-shadow: 3px 3px 5px grey;
    font-size: 1.3em;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: inherit;
    }

    &:hover {
      box-shadow: 1px 1px 5px grey;
      cursor: pointer;
    }
  }
`;

class Demo extends React.Component {
  render() {
    return (
      <StyledDemo>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Frederik</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Jovan</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Maxim</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Cristina</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Arol</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Sarah</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Marco</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Indi</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Laura</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Alice</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">Sonia</Link>
        </div>
        <div onClick={this.goToFeed} className="item">
          <Link to="/">None of them</Link>
        </div>
      </StyledDemo>
    );
  }
}

export default Demo;
