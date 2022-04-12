import styled from 'styled-components';
import { calRem } from '../../../themes/mixins';

const ButtonStyled = styled.button`
  color: ${props => props.textColor};
  font-size: ${props => calRem(props.fontSize)};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.btnBackground};
  border-color: ${props => props.borderColor};

  &:hover {
    background-color: ${props => props.hoverBgColor};
  };
`;

export default ButtonStyled;