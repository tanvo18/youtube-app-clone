import styled from 'styled-components';
import { calRem } from '../../themes/mixins';
import * as color from '../../themes/colors';

const DetailStyled = styled.div`
  padding-top: ${calRem(40)};
  background-color: ${color.bgDetail};

  & .video-list {
    display-flex;
    flex-direction: column;

    & .video-list-item {
      width: 70%;
    }
  }
`;

export default DetailStyled;