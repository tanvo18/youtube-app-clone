import { connect } from 'react-redux';
import VideoList from '../../components/video-list/VideoList';
import { Creators } from '../../actions/video';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  const { videos, statisticData, isFetching } = state.videos;
    
  return {
    videos: videos,
    statisticData: statisticData,
    isFetching: isFetching
  };
};

const mapDispatchToProps = {
  fetchVideo: Creators.fetchVideo,
};

export const GridVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default withRouter(GridVideoContainer);
