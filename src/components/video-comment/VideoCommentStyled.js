import styled from 'styled-components';
import { calRem } from '../../themes/mixins';
import * as color from '../../themes/colors';

const VideoCommentStyled = styled.li`
  display: flex;

  .avatar-wrap {

    & > img {
      display: block;
      width: ${calRem(40)};
      height: ${calRem(40)};
      border-radius: 50%;
    }
  }

  .comment-wrap {
    padding: 0 0 ${calRem(20)} ${calRem(20)};

    & > p {
      margin-bottom: ${calRem(4)};
      font-size: ${calRem(14)};
      color: ${color.videoTitle};
      font-weight: 500;

      &:nth-child(2) {
        color: ${color.comment};
        font-weight: 400;
      }
    }
  }
`;

export default VideoCommentStyled;