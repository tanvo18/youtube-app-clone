import React from 'react';
import ButtonStyled from './ButtonStyled';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { 
    btnClass,
    text,
    btnBackground,
    textColor,
    handleClick,
    btnFontSize,
    borderRadius,
    borderColor,
    hoverBgColor 
  } = props;
  
  return (
    <ButtonStyled
      className={btnClass}
      onClick={handleClick}
      textColor={textColor}
      btnBackground={btnBackground}
      fontSize={btnFontSize}
      borderRadius={borderRadius}
      borderColor={borderColor}
      hoverBgColor={hoverBgColor}
    >
      {text}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  textColor: '#fff',
  btnBackground: '#fff',
  btnFontSize: '16'
};

Button.propsType = {
  className: PropTypes.string,
  textColor: PropTypes.string,
  btnBackground: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;