import styled from 'styled-components';
import { calRem } from '../../themes/mixins';
import * as color from '../../themes/colors';

const PlaylistStyled = styled.div`
  
  & .playlist {
    padding: ${calRem(40)} ${calRem(30)} 0;

    & .playlist-item {
      list-style: none;
      padding: ${calRem(30)} 0;
      border-bottom: solid 1px ${color.border};

      &:hover {
        background-color: ${color.hoverVideo};
      }

      & .video-link {
        display: flex;
        text-decoration: none;
        
        & .playlist-description-wrap {
          padding-left: ${calRem(20)};
    
          & .title-description {
            font-size: ${calRem(18)};
            color: black;
          }
    
          & .quantity-description {
            font-size: ${calRem(13)};
            color: ${color.channelTitle};
          }
        }
      }
    }
  }
`;

export default PlaylistStyled;