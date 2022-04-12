import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchVideo: null,
  getSelectedVideo: ['videoId'],
  searchVideo: ['keyword'],
  searchRelatedVideo: ['videoId'],
  getComments: ['videoId'],
  // Actions for request data
  requestVideo: null,
  requestVideoSuccess: ['videos', 'statisticData', 'isSelectedVideo'],
  requestVideoFailure: ['error'],

  requestComments: null,
  requestCommentSuccess: ['comments'],
  requestCommentFailure: ['error'],

  requestRelatedVideoSuccess: ['videos', 'statisticData'],

  requestPlaylist: null,
  requestPlaylistSuccess: ['playlist'],
  requestPlaylistFailure: ['error'],

  requestPlaylistVideo: ['playlistId'],
  requestPlaylistVideoSuccess: ['videos'],
  requestPlaylistVideoFailure: ['error'],
  
  // Actions for posting
  postItem: null,
  postComment: ['channelId', 'videoId', 'text'],
  postCommentSuccess: null,
  postCommentFailure: ['error'],
  
  postVideo: ['selectedFile'],
  postVideoSuccess: null,
  postVideoFailure: ['error'],
});

export { Types, Creators };