import React from 'react';
import styled from 'styled-components';

const StyledImageTile = styled.div`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.bg};
    box-shadow: 0px 0px 5px 2px #ccc;
    width: 25vw;
    height: 25vw;
    border-radius: 5px;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
      background-color: ${props => props.theme.colors.primary};
    }

    &:hover {
      cursor: pointer;
      opacity: 0.5;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.bg};
    }
  }

  .selected {
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.bg};
    border: 5px solid ${props => props.theme.colors.primary};
  }
`;

class ImageTile extends React.Component {
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
      <StyledImageTile>
        <div
          className={`content ${selected ? 'selected' : null}`}
          onClick={this.toggleSelect}
        >
          <img src={this.props.text} alt="possible grandchild" />
        </div>
      </StyledImageTile>
    );
  }
}

export default ImageTile;
