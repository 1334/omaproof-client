import ARTextarea from 'react-textarea-autosize';
import styled from 'styled-components';

const Textarea = styled(ARTextarea)`
  border: none;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  padding-left: 3em;
  margin-bottom: 0.4em;
`;

export default Textarea;
