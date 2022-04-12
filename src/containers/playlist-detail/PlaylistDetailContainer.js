import { connect } from 'react-redux';
import PlaylistDetail from '../../components/playlist-detail/PlaylistDetail';
import { Creators } from '../../actions/video';

const mapStateToProps = (state, ownProps) => {
  const { playlistVideos, isFetching } = state.videos;

  return {
    selectedPlaylistId: ownProps.selectedPlaylistId,
    playlistVideos: playlistVideos,
    isFetching: isFetching
  };
};

const mapDispatchToProps = {
  requestPlaylistVideo: Creators.requestPlaylistVideo
};

export const PlaylistDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);

export default PlaylistDetailContainer;