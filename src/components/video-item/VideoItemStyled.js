import styled from 'styled-components';
import { calRem } from '../../themes/mixins';
import * as color from '../../themes/colors';

const VideoItemStyled = styled.li`
    padding: 0 ${calRem(10)};
    cursor: pointer;
    
    .video-link{
      text-decoration: none;

      & > p {
        font-size: ${calRem(13)};
        color: ${color.videoDesc};
        margin-bottom: ${calRem(10)};
      }
  
      .thumbnail-img {
        width: 100%;
        height: auto;
      }
  
      .video-title {
        font-size: ${calRem(14)};
        color: ${color.videoTitle};
      }
    }
`;

export default VideoItemStyled; 