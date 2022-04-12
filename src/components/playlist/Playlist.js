import React, { Component } from 'react';
import PlaylistStyled from './PlaylistStyled';
import { Link } from 'react-router-dom';
import Indicator from '../indicator/Indicator';
import PropTypes from 'prop-types';

class Playlist extends Component {

  componentDidMount() {
    this.props.requestPlaylist();
  }

  render() {
    const { playlist, isFetching } = this.props;

    return (
      <PlaylistStyled>
        <ul className="playlist">
          {
            isFetching
              ? <Indicator />
              : <div>
                {
                  playlist && playlist.length > 0
                    ? playlist.map((playlistVideo, index) => (
                      <li
                        key={index}
                        className="playlist-item"
                      >
                        <Link
                          className="video-link"
                          to={`/playlist-detail/${playlistVideo.id}`}
                        >
                          <div className="thumbnail-wrap">
                            {
                              playlistVideo.snippet.thumbnails
                                ? <img src={playlistVideo.snippet.thumbnails.medium.url} alt="" className="thumbnail-img" />
                                : <img src="" alt="" className="thumbnail-img" />
                            }

                          </div>
                          <div className="playlist-description-wrap">
                            <p className="title-description">{playlistVideo.snippet.title}</p>
                            <p className="quantity-description">VIEW FULL PLAYLIST ({playlistVideo.contentDetails.itemCount})</p>
                          </div>
                        </Link>
                      </li>
                    ))
                    : <p>There are no playlist</p>
                }
              </div>
          }
        </ul>
      </PlaylistStyled>
    );
  }
}

Playlist.defaultProps = {
  playlist: [],
};

Playlist.propTypes = {
  playlist: PropTypes.array,
};

export default Playlist;