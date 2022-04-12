import styled from 'styled-components';

const InputStyled = styled.input`
  margin: ${props => props.inputMargin};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.inputBorder};
  padding: ${props => props.inputPadding};
`;

export default InputStyled;