import styled from 'styled-components';
import { calRem } from '../../themes/mixins';

const VideoListStyled = styled.ul`
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 ${calRem(15)};

  & li {
    width: 25%;
    padding-bottom: ${calRem(20)};
  }
`;

export default VideoListStyled;