import { connect } from 'react-redux';
import UploadVideo from '../../components/upload-video/UploadVideo';
import { Creators } from '../../actions/video';

const mapStateToProps = (state, ownProps) => {
  const { isPosting } = state.videos;

  return {
    isPosting: isPosting
  };
};

const mapDispatchToProps = {
  postVideo: Creators.postVideo
};

export const UploadVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadVideo);

export default UploadVideoContainer;