import React from 'react';
import VideoItemStyled from './VideoItemStyled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VideoItem = ({ video, vidStatistic, handleClick }) => {
  const { snippet } = video;
  const { statistics } = vidStatistic;
  // Check video type because get video function and search function
  // return different json format
  const videoId = typeof video.id === 'string' ? video.id : video.id.videoId;

  return (
    <VideoItemStyled
      className="video-list-item"
      onClick={() => handleClick(videoId)}
    >
      <Link
        className="video-link"
        to={`/watch/${videoId}`}
      >
        <div className="thumbnail-wrap">
          <img src={snippet.thumbnails.medium.url} alt="" className="thumbnail-img" />
        </div>
        <p className="video-title">{snippet.title}</p>
        <p className="channel-title">{snippet.channelTitle}</p>
        <p className="video-description">{statistics ? statistics.viewCount : ''} views - {snippet.publishedAt}</p>
      </Link>
    </VideoItemStyled>
  );
};

VideoItem.defaultProps = {
  video: {},
  vidStatistic: {},
  handleClick: () => {},
};

VideoItem.propTypes = {
  video: PropTypes.object,
  vidStatistic: PropTypes.object,
  handleClick: PropTypes.func,
};

export default VideoItem;