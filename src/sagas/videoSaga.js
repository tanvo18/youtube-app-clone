import {
  takeLatest,
  take,
  call,
  put
} from 'redux-saga/effects';
import * as api from '../api/videoAPI';

// import new action
import { Types as VideoTypes } from '../actions/video';
import { Types as LoginTypes } from '../actions/login';

/**
 * Get videos
 */
export function* getVideos() {
  try {
    // Request video
    yield put({
      type: VideoTypes.REQUEST_VIDEO
    });


    // getPopularVideos
    const response = yield call(api.getPopularVideos);

    if (response.status === 200) {
      // requestVideoSuccess
      yield put({
        type: VideoTypes.REQUEST_VIDEO_SUCCESS,
        videos: response.data.items,
        statisticData: response.data.items,
        isSelectedVideo: false
      });
    } else {
      // requestVideoFailure
      yield put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    yield put({
      type: VideoTypes.REQUEST_VIDEO_FAILURE,
      error: error
    });
  }
};

/**
 * Get selected videos
 */
export function* getSelectedVideo({ videoId }) {

  try {
    // Request video
    yield put({
      type: VideoTypes.REQUEST_VIDEO
    });

    // Search video by id
    const response = yield call(api.getVideosById, videoId);

    if (response.status === 200) {
      // Success
      yield put({
        type: VideoTypes.REQUEST_VIDEO_SUCCESS,
        videos: response.data.items,
        statisticData: response.data.items,
        isSelectedVideo: true
      });
    } else {
      yield put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.REQUEST_VIDEO_FAILURE,
      error: error
    });
  }
}

/**
 * Search video
 */
export function* searchVideo({ keyword }) {
  try {
    // Request video
    yield put({
      type: VideoTypes.REQUEST_VIDEO
    });

    // Search video by keyword
    const response = yield call(api.searchVideoByKeyword, keyword);

    if (response.status === 200) {
      // Get id of videos from searchData
      let id = '';

      // Concat string id
      response.data.items.forEach(item => {
        id += item.id.videoId + ', ';
      });

      // Get statistic by id
      const statisticResponse = yield call(api.getStatisticById, id);

      if (statisticResponse.status === 200) {
        // Success
        yield put({
          type: VideoTypes.REQUEST_VIDEO_SUCCESS,
          videos: response.data.items,
          statisticData: statisticResponse.data.items,
          isSelectedVideo: false
        });
      } else {
        // Request statistic data fail
        yield put({
          type: VideoTypes.REQUEST_VIDEO_FAILURE,
          error: response.originalError.message
        });
      }
    } else {
      // Request video fail
      yield put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.REQUEST_VIDEO_FAILURE,
      error: error
    });
  }
}

/**
 * Get selected videos
 */
export function* searchVideoByRelated({ videoId }) {

  try {
    // Request video
    yield put({
      type: VideoTypes.REQUEST_VIDEO
    });
    const response = yield call(api.searchRelatedVideo, videoId);

    if (response.status === 200) {
      // Get id of videos from searchData
      let id = '';

      // Concat string id
      response.data.items.forEach(item => {
        id += item.id.videoId + ', ';
      });

      // Get statistic by id
      const statisticResponse = yield call(api.getStatisticById, id);

      if (statisticResponse.status === 200) {

        // Success
        yield put({
          type: VideoTypes.REQUEST_RELATED_VIDEO_SUCCESS,
          videos: response.data.items,
          statisticData: statisticResponse.data.items
        });
      } else {
        // Fail
        yield put({
          type: VideoTypes.REQUEST_VIDEO_FAILURE,
          error: response.originalError.message
        });
      }
    } else {
      // Fail
      yield put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.REQUEST_VIDEO_FAILURE,
      error: error
    });
  }
}


/**
 * Get comments
 */
export function* getComments({ videoId }) {
  try {
    // Request comments
    yield put({
      type: VideoTypes.REQUEST_COMMENTS
    });

    // Get Comment by videoId
    const response = yield call(api.getVideoComment, videoId);

    if (response.status === 200) {
      // Success
      yield put({
        type: VideoTypes.REQUEST_COMMENT_SUCCESS,
        comments: response.data.items,
      });
    } else {
      // Fail
      yield put({
        type: VideoTypes.REQUEST_COMMENT_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.REQUEST_COMMENT_FAILURE,
      error: error
    });
  }
}

export function* getPlaylist() {

  try {
    
    if (!window.gapi.client) {

      // Wait until login success and window.gapi !== undefine
      yield take(LoginTypes.LOGIN_SUCCESS);
    }

    // Request video
    yield put({
      type: VideoTypes.REQUEST_VIDEO
    });

    // Get user's playlist
    const response = yield call(api.getPlaylist);

    if (response.status === 200) {
      // Success
      yield put({
        type: VideoTypes.REQUEST_PLAYLIST_SUCCESS,
        playlist: response.result.items,
      });
    } else {
      // Fail
      yield put({
        type: VideoTypes.REQUEST_PLAYLIST_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.REQUEST_PLAYLIST_FAILURE,
      error: error
    });
  }
}

export function* getPlaylistVideo({ playlistId }) {

  try {
    if (!window.gapi.client) {
      // Wait until login success and window.gapi !== undefine
      yield take(LoginTypes.LOGIN_SUCCESS);
    }

    // Request video
    yield put({
      type: VideoTypes.REQUEST_VIDEO
    });

    // Get video in playlist
    const response = yield call(api.getVideoFromPlaylist, playlistId);
  
    if (response.status === 200) {
      // Success
      yield put({
        type: VideoTypes.REQUEST_PLAYLIST_VIDEO_SUCCESS,
        videos: response.result.items,
      });
    } else {
      // Fail
      yield put({
        type: VideoTypes.REQUEST_PLAYLIST_VIDEO_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.REQUEST_PLAYLIST_VIDEO_FAILURE,
      error: error
    });
  }
}

export function* postComment({ channelId, videoId, text }) {
  try {

    yield put({
      type: VideoTypes.POST_ITEM
    });

    const response = yield call(api.insertComment, channelId, videoId, text);

    if (response.status === 200) {
      // Success
      yield put({
        type: VideoTypes.POST_COMMENT_SUCCESS
      });
    } else {
      // Fail
      yield put({
        type: VideoTypes.POST_COMMENT_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.POST_COMMENT_FAILURE,
      error: error
    });
  }
}

export function* postVideo({ selectedFile }) {

  try {
    yield put({
      type: VideoTypes.POST_ITEM
    });

    const response = yield call(api.uploadVideoAPI, selectedFile);

    if (response.status === 200 || response.status === 201) {
      // Success function in Video API
      yield put({
        type: VideoTypes.POST_VIDEO_SUCCESS
      });

      yield alert('Upload successfully');
    } else {
      // Fail
      yield put({
        type: VideoTypes.POST_VIDEO_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    // Fail
    yield put({
      type: VideoTypes.POST_VIDEO_FAILURE,
      error: error
    });
  }
}

export function* watchVideoSaga() {
  yield takeLatest(VideoTypes.FETCH_VIDEO, getVideos);
  yield takeLatest(VideoTypes.GET_SELECTED_VIDEO, getSelectedVideo);
  yield takeLatest(VideoTypes.SEARCH_VIDEO, searchVideo);
  yield takeLatest(VideoTypes.SEARCH_RELATED_VIDEO, searchVideoByRelated);
  yield takeLatest(VideoTypes.GET_COMMENTS, getComments);
  yield takeLatest(VideoTypes.REQUEST_PLAYLIST, getPlaylist);
  yield takeLatest(VideoTypes.REQUEST_PLAYLIST_VIDEO, getPlaylistVideo);
  yield takeLatest(VideoTypes.POST_COMMENT, postComment);
  yield takeLatest(VideoTypes.POST_VIDEO, postVideo);
}
