import styled from 'styled-components';
import { calRem } from '../../themes/mixins';

const ChannelDescriptionStyled = styled.div`
  padding: ${calRem(20)} 0;
  border-bottom: solid ${calRem(1)} #eee;

  & > p {
    color: black;
    font-size: ${calRem(14)};
    font-weight: 400;
    margin-bottom: ${calRem(6)};

    &:nth-child(1) {
      font-weight: 500;
    }

    &:nth-child(2) {
      color: #c8c6c8;
      margin-bottom: ${calRem(16)};
    }
  }
`;

export default ChannelDescriptionStyled;