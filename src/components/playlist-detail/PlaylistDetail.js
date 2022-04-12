import React, { Component } from 'react';
import PlaylistDetailStyled from './PlaylistDetailStyled';
import { Link } from 'react-router-dom';
import Indicator from '../indicator/Indicator';
import PropTypes from 'prop-types';
class PlaylistDetail extends Component {
  componentDidMount() {
    this.props.requestPlaylistVideo(this.props.selectedPlaylistId);
  }

  render() {
    const { playlistVideos, isFetching } = this.props;
    
    return (
      <PlaylistDetailStyled>
        <ul className="playlist">
          {
            isFetching
              ? <Indicator />
              : <div>
                {
                  playlistVideos && playlistVideos.length > 0
                    ? playlistVideos.map((videoItem, index) => (

                      <li
                        key={index}
                        className="playlist-video-item"
                      >
                        <Link
                          className="video-link"
                          to={`/watch/${videoItem.contentDetails.videoId}`}
                        >
                          <div className="thumbnail-wrap">
                            {
                              videoItem.snippet.thumbnails
                                ? <img src={videoItem.snippet.thumbnails.default.url} alt="" className="thumbnail-img" />
                                : <img src="" alt="" className="thumbnail-img" />
                            }
                          </div>
                          <div className="playlist-description-wrap">
                            <p className="title">{videoItem.snippet.title}</p>
                            <p className="channel-title">{videoItem.snippet.channelTitle}</p>
                          </div>
                        </Link>
                      </li>
                    ))
                    : <p>There are no playlist</p>
                }
              </div>
          }

        </ul>
      </PlaylistDetailStyled>
    );
  }
}

PlaylistDetail.defaultProps = {
  selectedPlaylistId: '',
  playlistVideos: [],
  requestPlaylistVideo: () => { },
};

PlaylistDetail.propTypes = {
  selectedPlaylistId: PropTypes.string,
  playlistVideos: PropTypes.array,
  requestPlaylistVideo: PropTypes.func,
};

export default PlaylistDetail;