import React, { Component } from 'react';
import VideoItem from '../video-item/VideoItem';
import VideoListStyled from './VideoListStyled';
import PropTypes from 'prop-types';
import Indicator from '../indicator/Indicator';

class VideoList extends Component {

  componentDidMount() {
    this.getVideos();
  }

  getVideos = () => {
    const { match } = this.props;

    // Using for get video in homepage
    this.props.fetchVideo();

    // Using for search related video when click a video in list
    this.props.searchRelatedVideo(match.params.id);
  }

  componentWillUpdate(nextProps) {
    // Trigger when click to video in related video or change to another video
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.searchRelatedVideo(nextProps.match.params.id);
      this.props.getSelectedVideo(nextProps.match.params.id);
      this.props.getComments(nextProps.match.params.id);
    }
  }

  handleClickVideo = (videoId) => {
    return this.props.clickVideoItem(videoId);
  }

  render() {
    const { videos, statisticData, isFetching } = this.props;
    // console.log('====video ', videos);
    // console.log('====statistic ', statisticData);

    return (
      <div className="container video-container">
        {
          isFetching
            ? <Indicator />
            : <div>
              <VideoListStyled className="row video-list">
                {videos && videos.length > 0 && statisticData && statisticData.length > 0 ?
                  videos.map((videoItem, index) => (
                    <VideoItem
                      key={index}
                      video={videoItem}
                      vidStatistic={statisticData[index]}
                      handleClick={this.handleClickVideo}
                    />
                  ))
                  : <div>There are no videos</div>
                }
              </VideoListStyled>
            </div>
        }
      </div>
    );
  }
}

VideoList.defaultProps = {
  videos: [],
  statisticData: [],
  match: {
    params: {
      id: ''
    }
  },
  isFetching: false,
  fetchVideo: () => { },
  clickVideoItem: () => { },
  searchRelatedVideo: () => { },
  getSelectedVideo: () => { },
  getComments: () => { },
};

VideoList.propTypes = {
  videos: PropTypes.array,
  statisticData: PropTypes.array,
  isFetching: PropTypes.bool,
  match: PropTypes.object,
  fetchVideo: PropTypes.func,
  clickVideoItem: PropTypes.func,
};

export default VideoList;
