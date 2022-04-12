import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import IndicatorStyled from './IndicatorStyled';
import PropTypes from 'prop-types';

class Indicator extends Component {
  render() {
    const { loadingType, loadingColor, loadingWidth, loadingHeight } = this.props;

    return (
      <IndicatorStyled>
        <ReactLoading
          type={loadingType}
          color={loadingColor}
          height={loadingWidth}
          width={loadingHeight}
        />
      </IndicatorStyled>
    );
  }
}

Indicator.defaultProps = {
  loadingType: 'spin',
  loadingColor: '#8b8d8e',
  loadingWidth: 60,
  loadingHeight: 60,
};

Indicator.propTypes = {
  loadingType: PropTypes.string,
  loadingColor: PropTypes.string,
  loadingWidth: PropTypes.number,
  loadingHeight: PropTypes.number,
};

export default Indicator;