import React from 'react';
import styled from 'styled-components';

const StyledQuestionTile = styled.div`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.bg};
    box-shadow: 0px 0px 5px 2px #ccc;
    width: 25vw;
    height: 25vw;
    border-radius: 5px;

    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.bg};
    }
  }

  .selected {
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.bg};
  }
`;

class QuestionTile extends React.Component {
  state = {
    selected: false
  };

  toggleSelect = () => {
    this.setState({ selected: !this.state.selected }, () => {
      this.props.onSelect(this.props.text, this.state.selected);
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <StyledQuestionTile>
        <div
          className={`content ${selected ? 'selected' : null}`}
          onClick={this.toggleSelect}
        >
          {this.props.text.toUpperCase()}
        </div>
      </StyledQuestionTile>
    );
  }
}

export default QuestionTile;
