import { connect } from 'react-redux';
import DetailVideo from '../../components/detail-video/DetailVideo';
import { Creators } from '../../actions/video';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const { videos, statisticData, comments, isPosting } = state.videos;
  const { isSignedIn } = state.login;
  const videoUrl = `http://www.youtube.com/embed/${ownProps.selectedVideoId}`;

  return {
    videos: videos,
    statisticData: statisticData,
    selectedVideo: videos[0],
    selectedVideoStatistic: statisticData[0],
    comments: comments,
    isSignedIn: isSignedIn,
    isPosting: isPosting,
    videoUrl: videoUrl
  };
};

const mapDispatchToProps = {
  getSelectedVideo: Creators.getSelectedVideo,
  getComments: Creators.getComments,
  postComment: Creators.postComment
};

export const DetailVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailVideo);

export default withRouter(DetailVideoContainer);
