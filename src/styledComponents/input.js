// @flow
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-flow: column-reverse;
  position: relative;

  label {
    position: absolute;
    top: 0;
    transition: all 200ms;
    opacity: 0.5;
  }

  input {
    border: none;
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};

    ::placeholder {
      opacity: 0;
    }

    &:focus {
      border-bottom: 2px solid ${props => props.theme.colors.primary};
    }
  }

  input:focus + label,
  input:valid + label {
    font-size: 75%;
    transform: translate3d(0, -100%, 0);
    opacity: 1;
  }
`;

type Props = {
  name: string,
  label: string,
  placeholder: string,
  required?: boolean
};

function Input(props: Props) {
  return (
    <StyledInput>
      <input
        type="text"
        id={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </StyledInput>
  );
}

export default Input;
