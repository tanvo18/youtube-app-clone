import styled from 'styled-components';
import { calRem } from '../../../themes/mixins';

const LogoStyled = styled.h1`
  & > a > img {
    display: block;
    width: ${props => calRem(props.logoWidth)};
    height: ${props => calRem(props.logoHeight)};
  }  
`;

export default LogoStyled;