import React, { Component } from 'react';
import ChannelDescriptionStyled from './ChannelDescriptionStyled';
import PropTypes from 'prop-types';

class ChannelDescription extends Component {
  render() {
    return (
      <ChannelDescriptionStyled>
        <p>{this.props.channelTitle}</p>
        <p>{this.props.publishedAt}</p>
        <p>{this.props.description}</p>
      </ChannelDescriptionStyled>
    );
  }
}

ChannelDescription.defaultProps = {
  channelTitle: '',
  publishedAt: '',
  description: ''
};

ChannelDescription.propTypes = {
  channelTitle: PropTypes.string,
  publishedAt: PropTypes.string,
  description: PropTypes.string
};

export default ChannelDescription;
