import styled from 'styled-components';
import { calRem } from '../../themes/mixins';

const UploadVideoStyled = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding-top: ${calRem(40)}

  .upload-btn {
    border: ${calRem(2)} solid gray;
    color: gray;
    background-color: #fff;
    padding: ${calRem(8)} ${calRem(20)};
    border-radius: ${calRem(8)};
    font-size: ${calRem(20)};
    font-weight: bold;
  }

  .select-file {
    font-size: ${calRem(100)};
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;

  }
  
`;

export default UploadVideoStyled;