import { connect } from 'react-redux';
import Playlist from '../../components/playlist/Playlist';
import { Creators } from '../../actions/video';

const mapStateToProps = state => {
  const { playlist, isFetching } = state.videos;

  return {
    playlist: playlist,
    isFetching: isFetching
  };
};

const mapDispatchToProps = {
  requestPlaylist: Creators.requestPlaylist
};

export const PlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);

export default PlaylistContainer;