import React, { Component } from 'react';
import Button from '../common/button/Button';
import DetailVideoStyled from './DetailVideoStyled';
import VideoComment from '../video-comment/VideoComment';
import ChannelDescription from '../channel-description/ChannelDescription';
import CommentInputGroup from '../comment-input-group/CommentInputGroup';
import Indicator from '../indicator/Indicator';
import PropTypes from 'prop-types';

class DetailVideo extends Component {
  /**
   * componentDidMount
   */
  componentDidMount() {
    const { match } = this.props;
    // Get selected video
    this.props.getSelectedVideo(match.params.id);
    // Get comments
    this.props.getComments(match.params.id);
  }
  
  componentWillReceiveProps(nextProps) {
    if (!nextProps.isPosting && this.props.isPosting) { // Update successfully
      // Get comments
      this.props.getComments(this.props.match.params.id);
    }
  } 

  render() {
    const {
      selectedVideo,
      selectedVideoStatistic,
      comments,
      isSignedIn,
      isPosting,
      videoUrl
    } = this.props;

    return (
      selectedVideo
        ? (<DetailVideoStyled>
          <iframe src={videoUrl}
            title={selectedVideo.snippet.title}
            width="100%"
            height="580"
            frameBorder="0"
            allowFullScreen>
          </iframe>

          <div>
            <p className="detail-title">{selectedVideo.snippet.title}</p>
            <div className="detail-description">
              <p className="detail-view">{selectedVideoStatistic.statistics.viewCount} views</p>
              <div>
                <Button
                  btnClass="btn btn-rate"
                  btnBackground="transparent"
                  textColor="#8f8f8f"
                  text={<i className="fa fa-thumbs-up"></i>}
                  btnFontSize='20'
                />
                <span>{selectedVideoStatistic.statistics.likeCount}</span>
                <Button
                  btnClass="btn btn-rate"
                  btnBackground="transparent"
                  textColor="#8f8f8f"
                  text={<i className="fa fa-thumbs-down"></i>}
                  btnFontSize='20'
                />
                <span>{selectedVideoStatistic.statistics.dislikeCount}</span>
              </div>
            </div>
            <ChannelDescription
              channelTitle={selectedVideoStatistic.snippet.channelTitle}
              publishedAt={`Published on ${selectedVideoStatistic.snippet.publishedAt}`}
              description={selectedVideoStatistic.snippet.description}
            />
            <div>
              
              <CommentInputGroup 
                isSignedIn={isSignedIn}
                isPosting={isPosting}
                selectedVideo={selectedVideo}
                postComment={this.props.postComment}
              />

              <ul className="list-comment">
                {
                  comments && comments.length > 0
                    ? comments.map((comment, index) =>
                      (<VideoComment
                        key={index}
                        avatar={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        username={comment.snippet.topLevelComment.snippet.authorDisplayName}
                        userComment={comment.snippet.topLevelComment.snippet.textDisplay}
                      />))
                    : <div>There are no comments</div>
                }
              </ul>
            </div>

          </div>
        </DetailVideoStyled>)
        : <Indicator />
    );
  }
}

DetailVideo.propTypes = {
  title: PropTypes.string,
  selectedVideoStatistic: PropTypes.object,
  match: PropTypes.object,
  comments: PropTypes.array,
  isPosting: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  videoUrl: PropTypes.string,
  getSelectedVideo: PropTypes.func,
  getComments: PropTypes.func,
};

DetailVideo.defaultProps = {
  title: '',
  selectedVideoStatistic: {
    statistics: {
      viewCount: '',
      likeCount: '',
      dislikeCount: '',
    },
    snippet: {
      channelTitle: '',
      publishedAt: '',
      description: '',
    }
  },
  match: {
    params: {
      id: ''
    }
  },
  comments: [],
  isPosting: false,
  isSignedIn: false,
  videoUrl: '',
  getSelectedVideo: () => { },
  getComments: () => { },
  postComment: () => { },
};

export default DetailVideo;
