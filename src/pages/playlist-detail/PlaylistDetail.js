import React, { Component } from 'react';
import PlaylistDetailContainer from '../../containers/playlist-detail//PlaylistDetailContainer';
import PropTypes from 'prop-types';

class PlaylistDetail extends Component {

  render() {
    const selectedId = this.props.match.params.id;

    return (
      <div>
        <PlaylistDetailContainer
          selectedPlaylistId={selectedId}
        />
      </div>
    );
  }
}

PlaylistDetail.defaultProps = {
  match: {
    params: {
      id: ''
    }
  }
};

PlaylistDetail.propTypes = {
  match: PropTypes.object,
};
export default PlaylistDetail;