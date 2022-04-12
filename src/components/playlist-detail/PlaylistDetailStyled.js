import styled from 'styled-components';
import { calRem } from '../../themes/mixins';
import * as color from '../../themes/colors';

const PlaylistDetailStyled = styled.div`
  .playlist {
    padding: ${calRem(40)} ${calRem(30)} 0;

    .playlist-video-item {
      list-style: none;
      padding: ${calRem(30)} 0;
      border-bottom: solid 1px ${color.border};

      &:hover {
        background-color: ${color.hoverVideo};
      }

      .video-link {
        display: flex;
        text-decoration: none;
        
        .playlist-description-wrap {
          padding-left: ${calRem(20)};
    
          .title {
            font-size: ${calRem(18)};
            color: black;
          }
    
          .channel-title {
            font-size: ${calRem(13)};
            color: ${color.channelTitle};
          }
        }
    }
  }
`;

export default PlaylistDetailStyled;