import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as api from '../api/videoAPI';
import { Types as VideoTypes } from '../actions/video';
import { Types as LoginTypes } from '../actions/login';
import { watchVideoSaga } from './videoSaga';
import {
  takeLatest,
  take,
  call,
  put
} from 'redux-saga/effects';

describe('test videoSaga', () => {
  window.gapi = {
    // Load the api from google api you need, like oauth2 module
    load: function (api_module, callback) {
      callback();
    },
    auth2: {
      authorize: function (params, callback) { },
    },
    client: {
      init: jest.fn(),
      load: jest.fn(),
      getToken: jest.fn()
    }
  };

  const videoId = 'cBVGlBWQzuc';
  const error = new Error('Exception Error');

  it('test getVideos', () => {
    const response = {
      data: {
        items: []
      },
      isSelectedVideo: false,
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getPopularVideos), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_SUCCESS,
        videos: response.data.items,
        statisticData: response.data.items,
        isSelectedVideo: false
      })
      .dispatch({ type: VideoTypes.FETCH_VIDEO })
      .silentRun();
  });

  it('test getSelectedVideo', () => {
    const response = {
      data: {
        items: []
      },
      isSelectedVideo: false,
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideosById, videoId), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_SUCCESS,
        videos: response.data.items,
        statisticData: response.data.items,
        isSelectedVideo: true
      })
      .dispatch({ type: VideoTypes.GET_SELECTED_VIDEO, videoId })
      .silentRun();
  });

  it('test searchVideo', () => {
    const keyword = 'Music';
    const response = {
      data: {
        items: [
          {
            id: {
              videoId: 'cBVGlBWQzuc'
            }
          },
          {
            id: {
              videoId: 'dQWElBWQ123'
            }
          }
        ]
      },
      isSelectedVideo: false,
      status: 200
    };
    const id = 'cBVGlBWQzuc, dQWElBWQ123, ';
    const statisticResponse = {
      data: {
        items: []
      },
      isSelectedVideo: false,
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([
        [call(api.searchVideoByKeyword, keyword), response],
        [call(api.getStatisticById, id), statisticResponse]
      ])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_SUCCESS,
        videos: response.data.items,
        statisticData: statisticResponse.data.items,
        isSelectedVideo: false
      })
      .dispatch({ type: VideoTypes.SEARCH_VIDEO, keyword })
      .silentRun();
  });

  it('test searchVideoByRelated', () => {
    const response = {
      data: {
        items: [
          {
            id: {
              videoId: 'cBVGlBWQzuc'
            }
          },
          {
            id: {
              videoId: 'dQWElBWQ123'
            }
          }
        ]
      },
      status: 200
    };
    const id = 'cBVGlBWQzuc, dQWElBWQ123, ';
    const statisticResponse = {
      data: {
        items: []
      },
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([
        [call(api.searchRelatedVideo, videoId), response],
        [call(api.getStatisticById, id), statisticResponse]
      ])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_RELATED_VIDEO_SUCCESS,
        videos: response.data.items,
        statisticData: statisticResponse.data.items,
      })
      .dispatch({ type: VideoTypes.SEARCH_RELATED_VIDEO, videoId })
      .silentRun();
  });

  it('test getComments', () => {
    const response = {
      data: {
        items: []
      },
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideoComment, videoId), response]])
      .put({
        type: VideoTypes.REQUEST_COMMENTS
      })
      .put({
        type: VideoTypes.REQUEST_COMMENT_SUCCESS,
        comments: response.data.items,
      })
      .dispatch({ type: VideoTypes.GET_COMMENTS, videoId })
      .silentRun();
  });

  it('test getPlaylist', () => {

    const response = {
      result: {
        items: []
      },
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getPlaylist), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_PLAYLIST_SUCCESS,
        playlist: response.result.items,
      })
      .dispatch({ type: VideoTypes.REQUEST_PLAYLIST })
      .silentRun();
  });

  it('test getPlaylistVideo', () => {
    const playlistId = 'PLYD4txFCoRIdl5C9kSx6CffwH5';

    const response = {
      result: {
        items: []
      },
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideoFromPlaylist, playlistId), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_PLAYLIST_VIDEO_SUCCESS,
        videos: response.result.items,
      })
      .dispatch({ type: VideoTypes.REQUEST_PLAYLIST_VIDEO, playlistId })
      .silentRun();
  });

  it('test postComment', () => {
    const channelId = 'PLYD4txFCoRIdl5C9kSx6CffwH5';
    const text = 'This is an awesome day';

    const response = {
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.insertComment, channelId, videoId, text), response]])
      .put({
        type: VideoTypes.POST_ITEM
      })
      .put({
        type: VideoTypes.POST_COMMENT_SUCCESS,
      })
      .dispatch({ type: VideoTypes.POST_COMMENT, channelId, videoId, text })
      .silentRun();
  });

  it('test postVideo', () => {
    const selectedFile = {};

    const response = {
      status: 200
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.uploadVideoAPI, selectedFile), response]])
      .put({
        type: VideoTypes.POST_ITEM
      })
      .put({
        type: VideoTypes.POST_VIDEO_SUCCESS,
      })
      .dispatch({ type: VideoTypes.POST_VIDEO, selectedFile })
      .silentRun();
  });

  it('test getVideos fail', () => {
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getPopularVideos), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.FETCH_VIDEO })
      .silentRun();
  });

  it('test request getSelectedVideo fail', () => {
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideosById, videoId), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.GET_SELECTED_VIDEO, videoId })
      .silentRun();
  });

  it('test searchVideo fail', () => {
    const keyword = 'Music';
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.searchVideoByKeyword, keyword), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.SEARCH_VIDEO, keyword })
      .silentRun();
  });

  it('test request searchVideoByRelated fail', () => {
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.searchRelatedVideo, videoId), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.SEARCH_RELATED_VIDEO, videoId })
      .silentRun();
  });

  it('test request getComments fail', () => {
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideoComment, videoId), response]])
      .put({
        type: VideoTypes.REQUEST_COMMENTS
      })
      .put({
        type: VideoTypes.REQUEST_COMMENT_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.GET_COMMENTS, videoId })
      .silentRun();
  });

  it('test request getPlaylist fail', () => {
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getPlaylist), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_PLAYLIST_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.REQUEST_PLAYLIST })
      .silentRun();
  });

  it('test request getPlaylistVideo fail', () => {
    const playlistId = 'PLYD4txFCoRIdl5C9kSx6CffwH5';
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideoFromPlaylist, playlistId), response]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_PLAYLIST_VIDEO_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.REQUEST_PLAYLIST_VIDEO, playlistId })
      .silentRun();
  });

  it('test postComment fail', () => {
    const channelId = 'PLYD4txFCoRIdl5C9kSx6CffwH5';
    const text = 'This is an awesome day';
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.insertComment, channelId, videoId, text), response]])
      .put({
        type: VideoTypes.POST_ITEM
      })
      .put({
        type: VideoTypes.POST_COMMENT_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.POST_COMMENT, channelId, videoId, text })
      .silentRun();
  });

  it('test request postVideo fail', () => {
    const selectedFile = {};
    const response = {
      status: 500,
      originalError: {
        message: 'error 500'
      }
    };

    return expectSaga(watchVideoSaga)
      .provide([[call(api.uploadVideoAPI, selectedFile), response]])
      .put({
        type: VideoTypes.POST_ITEM
      })
      .put({
        type: VideoTypes.POST_VIDEO_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: VideoTypes.POST_VIDEO, selectedFile })
      .silentRun();
  });

  it('catch error getVideos fail', () => {
    return expectSaga(watchVideoSaga)
      .provide([[call(api.getPopularVideos), throwError(error)]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.FETCH_VIDEO })
      .silentRun();
  });

  it('catch error getSelectedVideo fail', () => {

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideosById, videoId), throwError(error)]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.GET_SELECTED_VIDEO, videoId })
      .silentRun();
  });

  it('catch error searchVideo fail', () => {
    const keyword = 'Football';

    return expectSaga(watchVideoSaga)
      .provide([[call(api.searchVideoByKeyword, keyword), throwError(error)]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.SEARCH_VIDEO, keyword })
      .silentRun();
  });

  it('catch error searchVideoByRelated fail', () => {

    return expectSaga(watchVideoSaga)
      .provide([[call(api.searchRelatedVideo, videoId), throwError(error)]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.SEARCH_RELATED_VIDEO, videoId })
      .silentRun();
  });

  it('catch error getComments fail', () => {

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideoComment, videoId), throwError(error)]])
      .put({
        type: VideoTypes.REQUEST_COMMENTS
      })
      .put({
        type: VideoTypes.REQUEST_COMMENT_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.GET_COMMENTS, videoId })
      .silentRun();
  });

  it('catch error getPlaylist fail', () => {

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getPlaylist), throwError(error)]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_PLAYLIST_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.REQUEST_PLAYLIST })
      .silentRun();
  });

  it('catch error getPlaylistVideo fail', () => {
    const playlistId = 'PLYD4txFCoRIdl5C9kSx6CffwH5';

    return expectSaga(watchVideoSaga)
      .provide([[call(api.getVideoFromPlaylist, playlistId), throwError(error)]])
      .put({
        type: VideoTypes.REQUEST_VIDEO
      })
      .put({
        type: VideoTypes.REQUEST_PLAYLIST_VIDEO_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.REQUEST_PLAYLIST_VIDEO, playlistId })
      .silentRun();
  });

  it('catch error postComment fail', () => {
    const channelId = 'PLYD4txFCoRIdl5C9kSx6CffwH5';
    const text = 'This is an awesome day';

    return expectSaga(watchVideoSaga)
      .provide([[call(api.insertComment, channelId, videoId, text), throwError(error)]])
      .put({
        type: VideoTypes.POST_ITEM
      })
      .put({
        type: VideoTypes.POST_COMMENT_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.POST_COMMENT, channelId, videoId, text })
      .silentRun();
  });

  it('catch error postVideo fail', () => {
    const selectedFile = {};

    return expectSaga(watchVideoSaga)
      .provide([[call(api.uploadVideoAPI, selectedFile), throwError(error)]])
      .put({
        type: VideoTypes.POST_ITEM
      })
      .put({
        type: VideoTypes.POST_VIDEO_FAILURE,
        error: error
      })
      .dispatch({ type: VideoTypes.POST_VIDEO, selectedFile })
      .silentRun();
  });
});
