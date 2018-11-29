import ARTextarea from 'react-textarea-autosize';
import styled from 'styled-components';

const TextareaCenter = styled(ARTextarea)`
  border: none;
  background-color: none;
  color: ${props => props.theme.colors.blue};
  border-bottom: 1px solid ${props => props.theme.colors.blue};
  padding-left: 3em;
  margin-bottom: 0.4em;
  text-align: center;
`;

export default TextareaCenter;
