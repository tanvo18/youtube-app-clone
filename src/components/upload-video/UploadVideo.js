import React, { Component } from 'react';
import UploadVideoStyled from './UploadVideoStyled';
import Indicator from '../indicator/Indicator';
import PropTypes from 'prop-types';

class UploadVideo extends Component {
  constructor(props) {
    super(props);
    this.selectedFile = null;
  }

  handleChangeFile = (files) => {
    this.selectedFile = files[0];
    this.props.postVideo(this.selectedFile);
  }

  render() {
    const { isPosting } = this.props;
    
    return (

      <UploadVideoStyled className="upload-btn-wrapper">
        {
          isPosting
            ? <Indicator />
            : <div>
              <input
                className="select-file"
                type="file"
                onChange={(event) => this.handleChangeFile(event.target.files)}
              />
              <button
                className="upload-btn"
              >
                Upload
              </button>
            </div>
        }

      </UploadVideoStyled>
    );
  }
}

UploadVideo.defaultProps = {
  isPosting: false,
  postVideo: () => { },
};

UploadVideo.propTypes = {
  isPosting: PropTypes.bool,
  postVideo: PropTypes.func,
};

export default UploadVideo;