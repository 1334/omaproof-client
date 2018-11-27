import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: white;
  font-size: 1rem;
  height: 1.5em;
  padding: 0.2em 1.5em;
  border: none;
  border-radius: 0.75em;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default Button;
