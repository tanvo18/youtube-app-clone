import styled from 'styled-components';
import { calRem } from '../../themes/mixins';

const DetailVideoStyled = styled.div`
  padding-left: ${calRem(75)};

  .detail-view {
    color: #757575;
  }

  .detail-title {
    font-size: ${calRem(18)};
  }

  .detail-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${calRem(20)};
    border-bottom: solid ${calRem(1)} #eee;

    & > p {
      margin-bottom: 0;
    }

    & > div {
      display: flex;
      align-items: center;
    }

    .btn-rate {
      cursor: default;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

  }

  .comment-wrap {
    padding-top: ${calRem(20)};

    .btn-comment-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: ${calRem(10)}
    }

    .comment-box {
      font-size: ${calRem(14)}
      border: none;
      border-bottom: solid ${calRem(1)} #eee;
      background-color: #fafafa;
      width: 100%;

      &:focus {
        border-color: black;
        outline: none;
        display: block;
      }
    }
  }

  .list-comment {
    padding: ${calRem(20)} 0 0;
  }
`;

export default DetailVideoStyled;