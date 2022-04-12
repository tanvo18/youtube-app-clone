import React, { Component } from 'react';
import VideoCommentStyled from './VideoCommentStyled';
import PropTypes from 'prop-types';

class VideoComment extends Component {
  render() {

    return (
      <VideoCommentStyled>
        <div className="avatar-wrap">
          <img src={this.props.avatar} alt="avatar"/>
        </div>
        <div className="comment-wrap">
          <p>{this.props.username}</p>
          <p className="user-comment">{this.props.userComment}</p>
        </div>
      </VideoCommentStyled>
    );
  }
}

VideoComment.defaultProps = {
  avatar: '',
  username: '',
  userComment: '',
};

VideoComment.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  userComment: PropTypes.string,
};

export default VideoComment;
