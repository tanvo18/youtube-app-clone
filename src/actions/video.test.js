import { Creators } from './video';

describe('actions video', () => {
  it('shoud create an action to fetch video', () => {
    const expectedAction = {
      type: 'FETCH_VIDEO'
    };

    expect(Creators.fetchVideo()).toEqual(expectedAction);
  });

  it('shoud create an action to get selected video', () => {
    const videoId = 'FLqvTE1Eqfg';
    const expectedAction = {
      type: 'GET_SELECTED_VIDEO',
      videoId
    };

    expect(Creators.getSelectedVideo(videoId)).toEqual(expectedAction);
  });

  it('shoud create an action to search video', () => {
    const keyword = 'Football';
    const expectedAction = {
      type: 'SEARCH_VIDEO',
      keyword
    };

    expect(Creators.searchVideo(keyword)).toEqual(expectedAction);
  });

  it('shoud create an action to search related video', () => {
    const videoId = 'FLqvTE1Eqfg';
    const expectedAction = {
      type: 'SEARCH_RELATED_VIDEO',
      videoId
    };

    expect(Creators.searchRelatedVideo(videoId)).toEqual(expectedAction);
  });

  it('shoud create an action to get comment', () => {
    const videoId = 'FLqvTE1Eqfg';
    const expectedAction = {
      type: 'GET_COMMENTS',
      videoId
    };

    expect(Creators.getComments(videoId)).toEqual(expectedAction);
  });

  it('shoud create an action to request video', () => {
    const expectedAction = {
      type: 'REQUEST_VIDEO'
    };

    expect(Creators.requestVideo()).toEqual(expectedAction);
  });

  it('shoud create an action to request video success', () => {
    const videos = [];
    const statisticData = [];
    const isSelectedVideo = true;

    const expectedAction = {
      type: 'REQUEST_VIDEO_SUCCESS',
      videos,
      statisticData,
      isSelectedVideo
    };

    expect(Creators.requestVideoSuccess(videos, statisticData, isSelectedVideo)).toEqual(expectedAction);
  });

  it('shoud create an action to request video fail', () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'REQUEST_VIDEO_FAILURE',
      error
    };

    expect(Creators.requestVideoFailure(error)).toEqual(expectedAction);
  });

  it('shoud create an action to request comment success', () => {
    const comments = [];

    const expectedAction = {
      type: 'REQUEST_COMMENT_SUCCESS',
      comments
    };

    expect(Creators.requestCommentSuccess(comments)).toEqual(expectedAction);
  });

  it('shoud create an action to request comment fail', () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'REQUEST_COMMENT_FAILURE',
      error
    };

    expect(Creators.requestCommentFailure(error)).toEqual(expectedAction);
  });

  it('shoud create an action to request related video success', () => {
    const videos = [];
    const statisticData = [];

    const expectedAction = {
      type: 'REQUEST_RELATED_VIDEO_SUCCESS',
      videos,
      statisticData
    };

    expect(Creators.requestRelatedVideoSuccess(videos, statisticData)).toEqual(expectedAction);
  });

  it('shoud create an action to request playlist', () => {
    const expectedAction = {
      type: 'REQUEST_PLAYLIST'
    };

    expect(Creators.requestPlaylist()).toEqual(expectedAction);
  });

  it('shoud create an action to request playlist success', () => {
    const playlist = [];

    const expectedAction = {
      type: 'REQUEST_PLAYLIST_SUCCESS',
      playlist
    };

    expect(Creators.requestPlaylistSuccess(playlist)).toEqual(expectedAction);
  });

  it('shoud create an action to request playlist fail', () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'REQUEST_PLAYLIST_FAILURE',
      error
    };

    expect(Creators.requestPlaylistFailure(error)).toEqual(expectedAction);
  });

  it('shoud create an action to request playlist', () => {
    const playlistId = 'PLYD4txFCoRIddpm1qaxj39HW0odA4Ojie';
    const expectedAction = {
      type: 'REQUEST_PLAYLIST_VIDEO',
      playlistId
    };

    expect(Creators.requestPlaylistVideo(playlistId)).toEqual(expectedAction);
  });

  it('shoud create an action to request playlist video success', () => {
    const videos = [];

    const expectedAction = {
      type: 'REQUEST_PLAYLIST_VIDEO_SUCCESS',
      videos
    };

    expect(Creators.requestPlaylistVideoSuccess(videos)).toEqual(expectedAction);
  });

  it('shoud create an action to request playlist video fail', () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'REQUEST_PLAYLIST_VIDEO_FAILURE',
      error
    };

    expect(Creators.requestPlaylistVideoFailure(error)).toEqual(expectedAction);
  });

  it('shoud create an action to post item', () => {
    const expectedAction = {
      type: 'POST_ITEM'
    };

    expect(Creators.postItem()).toEqual(expectedAction);
  });

  it('shoud create an action to post comment', () => {
    const channelId = 'UCvC4D8onUfXzvjTOM-dBfEA';
    const videoId = 'Z1BCujX3pw8';
    const text = 'This movie is good';
    const expectedAction = {
      type: 'POST_COMMENT',
      channelId,
      videoId,
      text
    };

    expect(Creators.postComment(channelId, videoId, text)).toEqual(expectedAction);
  });

  it('shoud create an action to post comment success', () => {
    const expectedAction = {
      type: 'POST_COMMENT_SUCCESS'
    };

    expect(Creators.postCommentSuccess()).toEqual(expectedAction);
  });

  it('shoud create an action to post comment fail', () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'POST_COMMENT_FAILURE',
      error
    };

    expect(Creators.postCommentFailure(error)).toEqual(expectedAction);
  });

  it('shoud create an action to post video', () => {
    const selectedFile = {
      name: 'video-exam.mp4', 
      lastModified: 1537407711728, 
      lastModifiedDate: 'Thu Sep 20 2018 08:41:51 GMT+0700 (+07)', 
      webkitRelativePath: '', 
      size: 788493
    };
    const expectedAction = {
      type: 'POST_VIDEO',
      selectedFile
    };

    expect(Creators.postVideo(selectedFile)).toEqual(expectedAction);
  });

  it('shoud create an action to post video success', () => {
    const expectedAction = {
      type: 'POST_VIDEO_SUCCESS'
    };

    expect(Creators.postVideoSuccess()).toEqual(expectedAction);
  });

  it('shoud create an action to post video fail', () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'POST_VIDEO_FAILURE',
      error
    };

    expect(Creators.postVideoFailure(error)).toEqual(expectedAction);
  });
});