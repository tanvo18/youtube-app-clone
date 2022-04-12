import { roundNumber, calculateDate, convertFormatDate } from '../utils/utils';
import { Types } from '../actions/video';
import { createReducer } from 'reduxsauce';
import Immutable , { merge } from 'seamless-immutable';

const initialState = Immutable({
  videos: [],
  statisticData: [],
  reladtedVideos: [],
  relatedStatistic: [],
  comments: [],
  playlist: [],
  playlistVideos: [],
  isFetching: false,
  error: null,
  isPosting: false,
});

/**
 * Request Video
 */
export const requestVideo = (state = initialState, action) => {
  return merge(state, {
    isFetching: true
  });
};

/**
 * Request Video Success
 */
export const requestVideoSuccess = (state = initialState, action) => {

  action.isSelectedVideo
    ? action.videos.forEach((videoItem) => {
      // Convert to new format date like Sep 4th 2018
      videoItem.snippet.publishedAt = convertFormatDate(videoItem.snippet.publishedAt);
    })
    : action.videos.forEach((videoItem) => {
      // Calculate the length of date, e.g: a day ago
      videoItem.snippet.publishedAt = calculateDate(videoItem.snippet.publishedAt);
    });
  
  // Round number for viewCount, likeCount and dislikeCount
  action.statisticData.forEach((data) => {
    data.statistics.viewCount = roundNumber(data.statistics.viewCount);
    data.statistics.likeCount = roundNumber(data.statistics.likeCount);
    data.statistics.dislikeCount = roundNumber(data.statistics.dislikeCount);
  });

  return merge(state, {
    isFetching: false,
    videos: action.videos,
    statisticData: action.statisticData
  });
};

/**
 * Request Related Video Success
 */
export const requestRelatedVideoSuccess = (state = initialState, action) => {
  // Calculate the length of date, e.g: a day ago
  action.videos.forEach((videoItem) => {
    videoItem.snippet.publishedAt = calculateDate(videoItem.snippet.publishedAt);
  });

  // Round number for viewCount, likeCount and dislikeCount
  action.statisticData.forEach((data) => {
    data.statistics.viewCount = roundNumber(data.statistics.viewCount);
    data.statistics.likeCount = roundNumber(data.statistics.likeCount);
    data.statistics.dislikeCount = roundNumber(data.statistics.dislikeCount);
  });

  return merge(state, {
    isFetching: false,
    reladtedVideos: action.videos,
    relatedStatistic: action.statisticData
  });
};

/**
 * Request Video Failure
 */
export const requestVideoFailure = (state = initialState, action) => {
  return merge(state, {
    isFetching: false,
    error: action.error
  });
};

/**
 * Request Comment Success
 */
export const requestCommentSuccess = (state = initialState, action) => {
  return merge(state, {
    isFetching: false,
    comments: action.comments
  });
};

/**
 * Request Comment Failure
 */
export const requestCommentFailure = (state = initialState, action) => {
  return merge(state, {
    isFetching: false,
    error: action.error
  });
};

/**
 * Request playlist success
 */
export const requestPlaylistSuccess = (state = initialState, action) => {
  return merge(state, {
    isFetching: false,
    playlist: action.playlist
  });
};

/**
 * Request playlist failure
 */
export const requestPlaylistFailure = (state = initialState, action) => {
  return merge(state, {
    isFetching: false,
    error: action.error,
  });
};

/**
 * Request playlist video success
 */
export const requestPlaylistVideoSuccess = (state = initialState, action) => {
  return merge(state, {
    isFetching: false,
    playlistVideos: action.videos
  });
};

/**
 * Request playlist video failure
 */
export const requestPlaylistVideoFailure = (state = initialState, action) => {
  return merge(state, {
    isFetching: false,
    error: action.error,
  });
};

/**
 * Start posting
 */
export const postItem = (state = initialState, action) => {
  return merge(state, {
    isPosting: true
  });
};

/**
 * Post comment success
 */
export const postCommentSuccess = (state = initialState, action) => {
  return merge(state, {
    isPosting: false
  });
};

/**
 * Post comment failure
 */
export const postCommentFailure = (state = initialState, action) => {
  return merge(state, {
    isPosting: false,
    error: action.error
  });
};

/**
 * Post video success
 */
export const postVideoSuccess = (state = initialState, action) => {
  return merge(state, {
    isPosting: false
  });
};

/**
 * Post video failure
 */
export const postVideoFailure = (state = initialState, action) => {
  return merge(state, {
    isPosting: false,
    error: action.error
  });
};

/**
 * Request Video
 */
export const requestComments = (state = initialState, action) => {
  return merge(state, {
    isFetching: true
  });
};

const videos = createReducer(initialState, {
  [Types.REQUEST_VIDEO]: requestVideo,
  [Types.REQUEST_VIDEO_SUCCESS]: requestVideoSuccess,
  [Types.REQUEST_RELATED_VIDEO_SUCCESS]: requestRelatedVideoSuccess,
  [Types.REQUEST_VIDEO_FAILURE]: requestVideoFailure,
  [Types.REQUEST_COMMENT_SUCCESS]: requestCommentSuccess,
  [Types.REQUEST_COMMENT_FAILURE]: requestCommentFailure,
  [Types.REQUEST_PLAYLIST_SUCCESS]: requestPlaylistSuccess,
  [Types.REQUEST_PLAYLIST_FAILURE]: requestPlaylistFailure,
  [Types.REQUEST_PLAYLIST_VIDEO_SUCCESS]: requestPlaylistVideoSuccess,
  [Types.REQUEST_PLAYLIST_VIDEO_FAILURE]: requestPlaylistVideoFailure,
  [Types.POST_ITEM]: postItem,
  [Types.REQUEST_COMMENTS]: requestComments,
  [Types.POST_COMMENT_SUCCESS]: postCommentSuccess,
  [Types.POST_COMMENT_FAILURE]: postCommentFailure,
  [Types.POST_VIDEO_SUCCESS]: postVideoSuccess,
  [Types.POST_VIDEO_FAILURE]: postVideoFailure,
});

export default videos;
