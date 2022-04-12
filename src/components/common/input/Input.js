import React from 'react';
import InputStyled from './InputStyled';
import { calRem } from '../../../themes/mixins';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { 
    inputType,
    inputClass,
    placeHolder,
    inputRef,
    handleKeyDown,
    borderRadius,
    inputWidth,
    inputHeight,
    inputBorder,
    inputPadding
  } = props;

  return (
    <InputStyled
      type={inputType}
      className={inputClass}
      placeholder={placeHolder}
      innerRef={inputRef}
      onKeyDown={handleKeyDown}
      borderRadius={borderRadius}
      width={inputWidth}
      height={inputHeight}
      inputBorder={inputBorder}
      inputPadding={inputPadding}
    >
    </InputStyled>
  );
};

Input.defaultProps = {
  type: 'text',
  width:`${calRem(200)}`,
  height:`${calRem(20)}`,
  inputBorder: `solid ${calRem(1)} #ccd3d9`,
  inputPadding: `${calRem(5)}`
};

Input.propType = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  inputBorder: PropTypes.string,
  inputPadding: PropTypes.string,
  onKeyDown: PropTypes.func.isRequired
};

export default Input;