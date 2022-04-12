import { connect } from 'react-redux';
import VideoList from '../../components/video-list/VideoList';
import { Creators } from '../../actions/video';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  const { reladtedVideos, relatedStatistic, isFetching } = state.videos;

  return {
    videos: reladtedVideos,
    statisticData: relatedStatistic,
    isFetching: isFetching
  };
};

const mapDispatchToProps = {
  searchRelatedVideo: Creators.searchRelatedVideo,
  getSelectedVideo: Creators.getSelectedVideo,
  getComments: Creators.getComments
};

export const RelatedVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default withRouter(RelatedVideoContainer);