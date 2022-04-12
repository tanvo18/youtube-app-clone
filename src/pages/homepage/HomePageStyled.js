import styled from 'styled-components';
import { calRem } from '../../themes/mixins';
import * as color from '../../themes/colors';

const HomePageStyled = styled.div`
  background-color: ${color.bgHomepage};

  .video-container {
    padding-top: ${calRem(40)};
  }
`;

export default HomePageStyled;