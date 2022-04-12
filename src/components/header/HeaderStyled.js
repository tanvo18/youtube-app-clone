import styled from 'styled-components';
import { calRem } from '../../themes/mixins';
import * as color from '../../themes/colors';

const HeaderStyled = styled.div`
  display: flex;
  padding-left: ${calRem(40)};
  background-color: ${color.white};

  .search-wrap {
    display: flex;
    align-items: center;
    width: ${calRem(600)};
    margin-left: ${calRem(200)}
  }

  .login-btn-wrap {
    margin-left: ${calRem(200)};
    display: flex;
    justify-content: center;
    align-items: center;

    .user-info {
      display: flex;

      & > .btn-avatar {
        display: block;
        width: ${calRem(40)};
        height: ${calRem(40)};
        border-radius: 50%;
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
        
        &:after {
          display: none;
        }

        & > img {
          display: block;
          width: 100%;
          height: auto
          border-radius: 50%;
        }
      }
    } 
  }

  @media (min-width: 1440px) {
    .search-wrap {
      margin-left: ${calRem(400)}
    }
  }
`;

export default HeaderStyled;