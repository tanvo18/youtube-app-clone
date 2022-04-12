import React from 'react';
import LogoStyled from './LogoStyled';
import PropTypes from 'prop-types';

const Logo = ({ logoClass, logoImg, link, logoWidth, logoHeight, logoAlt }) => {
  return (
    <LogoStyled
      className={logoClass}
      logoWidth={logoWidth}
      logoHeight={logoHeight}
    >
      <a href={link}>
        <img src={logoImg} alt={logoAlt} />
      </a>
    </LogoStyled>
  );
};

Logo.defaultProps = {
  logoImg: '',
  link: '',
  logoWidth: '',
  logoHeight: '',
  logoAlt: '',
};

Logo.propType = {
  logoImg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  logoWidth: PropTypes.string,
  logoHeight: PropTypes.string,
  logoAlt: PropTypes.string,
};

export default Logo;