import reducer from './index';
import { Types as LoginTypes } from '../actions/login';
import { Types as UserTypes } from '../actions/user';
import { Types as VideoTypes } from '../actions/video';
import { calculateDate } from '../utils/utils';

describe('Test reducer', () => {
  const publishedDate = '2018-10-21T13:00:07.000Z';
  const convertPublishedDate = calculateDate(publishedDate);

  describe('Test initialState', () => {
    it('should return the initial state', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };

      expect(reducer(undefined, {})).toEqual(expectedResult);
    });
  });

  describe('Test video', () => {
    it('should handle requestVideo', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: true,
          error: null,
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestVideoAction = {
        type: VideoTypes.REQUEST_VIDEO,
        isFetching: true
      };
  
      expect(reducer({}, requestVideoAction)).toEqual(expectedResult);
    });
  
    it('should handle requestVideoSuccess', () => {
      const expectedResult = {
        videos: {
          videos: [{
            'id': 'cBVGlBWQzuc',
            'snippet': {
              'publishedAt': convertPublishedDate,
              'channelId': 'UCN1hnUccO4FD5WfM7ithXaw',
              'title': 'Maroon 5 - Girls Like You ft. Cardi B (Volume 2)',
              'description': '"Girls Like You” is out now.\nhttp://smarturl.it/GLY \n\nFor more, visit: \nhttps://www.facebook.com/maroon5 \nhttps://twitter.com/maroon5 \nhttps://www.instagram.com/maroon5 \n\nSign up for updates: http://smarturl.it/Maroon5.News\n\nMusic video by Maroon 5 performing Girls Like You. © 2018 Interscope Records\n\nhttp://vevo.ly/BGhT8W',
              'thumbnails': {
                'default': {
                  'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/default.jpg',
                  'width': 120,
                  'height': 90
                },
                'medium': {
                  'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/mqdefault.jpg',
                  'width': 320,
                  'height': 180
                },
              },
              'channelTitle': 'Maroon5VEVO',
            }
          }],
          statisticData: [{
            'statistics': {
              'viewCount': '1',
              'likeCount': '128',
              'dislikeCount': '1',
              'favoriteCount': '0',
              'commentCount': '10027'
            }
          }],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: null,
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestVideoSuccessAction = {
        isSelectedVideo: false,
        type: VideoTypes.REQUEST_VIDEO_SUCCESS,
        isFetching: false,
        videos: [{
          'id': 'cBVGlBWQzuc',
          'snippet': {
            'publishedAt': publishedDate,
            'channelId': 'UCN1hnUccO4FD5WfM7ithXaw',
            'title': 'Maroon 5 - Girls Like You ft. Cardi B (Volume 2)',
            'description': '"Girls Like You” is out now.\nhttp://smarturl.it/GLY \n\nFor more, visit: \nhttps://www.facebook.com/maroon5 \nhttps://twitter.com/maroon5 \nhttps://www.instagram.com/maroon5 \n\nSign up for updates: http://smarturl.it/Maroon5.News\n\nMusic video by Maroon 5 performing Girls Like You. © 2018 Interscope Records\n\nhttp://vevo.ly/BGhT8W',
            'thumbnails': {
              'default': {
                'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/default.jpg',
                'width': 120,
                'height': 90
              },
              'medium': {
                'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
            },
            'channelTitle': 'Maroon5VEVO',
          }
        }],
        statisticData: [{
          'statistics': {
            'viewCount': '1',
            'likeCount': '128',
            'dislikeCount': '1',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        },]
      };
  
      expect(reducer({}, requestVideoSuccessAction)).toEqual(expectedResult);
    });
  
    it('should handle requestRelatedVideoSuccess', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [{
            'id': 'cBVGlBWQzuc',
            'snippet': {
              'publishedAt': convertPublishedDate,
              'channelId': 'UCN1hnUccO4FD5WfM7ithXaw',
              'title': 'Maroon 5 - Girls Like You ft. Cardi B (Volume 2)',
              'description': '"Girls Like You” is out now.\nhttp://smarturl.it/GLY \n\nFor more, visit: \nhttps://www.facebook.com/maroon5 \nhttps://twitter.com/maroon5 \nhttps://www.instagram.com/maroon5 \n\nSign up for updates: http://smarturl.it/Maroon5.News\n\nMusic video by Maroon 5 performing Girls Like You. © 2018 Interscope Records\n\nhttp://vevo.ly/BGhT8W',
              'thumbnails': {
                'default': {
                  'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/default.jpg',
                  'width': 120,
                  'height': 90
                },
                'medium': {
                  'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/mqdefault.jpg',
                  'width': 320,
                  'height': 180
                },
              },
              'channelTitle': 'Maroon5VEVO',
            }
          }],
          relatedStatistic: [{
            'statistics': {
              'viewCount': '1',
              'likeCount': '128',
              'dislikeCount': '1',
              'favoriteCount': '0',
              'commentCount': '10027'
            }
          }],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: null,
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestRelatedVideoSuccess = {
        type: VideoTypes.REQUEST_RELATED_VIDEO_SUCCESS,
        isFetching: false,
        videos: [{
          'id': 'cBVGlBWQzuc',
          'snippet': {
            'publishedAt': publishedDate,
            'channelId': 'UCN1hnUccO4FD5WfM7ithXaw',
            'title': 'Maroon 5 - Girls Like You ft. Cardi B (Volume 2)',
            'description': '"Girls Like You” is out now.\nhttp://smarturl.it/GLY \n\nFor more, visit: \nhttps://www.facebook.com/maroon5 \nhttps://twitter.com/maroon5 \nhttps://www.instagram.com/maroon5 \n\nSign up for updates: http://smarturl.it/Maroon5.News\n\nMusic video by Maroon 5 performing Girls Like You. © 2018 Interscope Records\n\nhttp://vevo.ly/BGhT8W',
            'thumbnails': {
              'default': {
                'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/default.jpg',
                'width': 120,
                'height': 90
              },
              'medium': {
                'url': 'https://i.ytimg.com/vi/cBVGlBWQzuc/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
            },
            'channelTitle': 'Maroon5VEVO',
          }
        }],
        statisticData: [{
          'statistics': {
            'viewCount': '1',
            'likeCount': '128',
            'dislikeCount': '1',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        }]
      };
  
      expect(reducer({}, requestRelatedVideoSuccess)).toEqual(expectedResult);
    });
  
    it('should handle requestVideoFailure', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: 'error',
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestVideoFailure = {
        type: VideoTypes.REQUEST_VIDEO_FAILURE,
        isFetching: false,
        error: 'error'
      };
  
      expect(reducer({}, requestVideoFailure)).toEqual(expectedResult);
    });
  
    it('should handle requestCommentSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestCommentSuccess = {
        type: VideoTypes.REQUEST_COMMENT_SUCCESS,
        isFetching: false,
        comments: []
      };
  
      expect(reducer({}, requestCommentSuccess)).toEqual(expectedResult);
    });
  
    it('should handle requestCommentSuccess', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: 'error',
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestCommentSuccess = {
        type: VideoTypes.REQUEST_COMMENT_FAILURE,
        isFetching: false,
        error: 'error'
      };
  
      expect(reducer({}, requestCommentSuccess)).toEqual(expectedResult);
    });
  
    it('should handle requestPlaylistSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestPlaylistSuccess = {
        type: VideoTypes.REQUEST_PLAYLIST_SUCCESS,
        isFetching: false,
        playlist: []
      };
  
      expect(reducer({}, requestPlaylistSuccess)).toEqual(expectedResult);
    });
  
    it('should handle requestPlaylistVideoFailure', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: 'error',
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestPlaylistFailure = {
        type: VideoTypes.REQUEST_PLAYLIST_FAILURE,
        isFetching: false,
        error: 'error'
      };
  
      expect(reducer({}, requestPlaylistFailure)).toEqual(expectedResult);
    });
  
    it('should handle requestPlaylistVideoSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestPlaylistVideoSuccess = {
        type: VideoTypes.REQUEST_PLAYLIST_VIDEO_SUCCESS,
        isFetching: false,
        videos: []
      };
  
      expect(reducer({}, requestPlaylistVideoSuccess)).toEqual(expectedResult);
    });
  
    it('should handle requestPlaylistVideoFailure', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: 'error',
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestPlaylistVideoFailure = {
        type: VideoTypes.REQUEST_PLAYLIST_VIDEO_FAILURE,
        isFetching: false,
        error: 'error'
      };
  
      expect(reducer({}, requestPlaylistVideoFailure)).toEqual(expectedResult);
    });
  
    it('should handle postItem', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: null,
          isPosting: true,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const postItem = {
        type: VideoTypes.POST_ITEM,
        isPosting: true
      };
  
      expect(reducer({}, postItem)).toEqual(expectedResult);
    });
  
    it('should handle requestComments', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: true,
          error: null,
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const requestComments = {
        type: VideoTypes.REQUEST_COMMENTS,
        isFetching: true
      };
  
      expect(reducer({}, requestComments)).toEqual(expectedResult);
    });
  
    it('should handle postCommentSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const postCommentSuccess = {
        type: VideoTypes.POST_COMMENT_SUCCESS,
        isPosting: false
      };
  
      expect(reducer({}, postCommentSuccess)).toEqual(expectedResult);
    });
  
    it('should handle postCommentFailure', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: 'error',
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const postCommentFailure = {
        type: VideoTypes.POST_COMMENT_FAILURE,
        isPosting: false,
        error: 'error'
      };
  
      expect(reducer({}, postCommentFailure)).toEqual(expectedResult);
    });
  
    it('should handle postVideoSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const postVideoSuccess = {
        type: VideoTypes.POST_VIDEO_SUCCESS,
        isPosting: false
      };
  
      expect(reducer({}, postVideoSuccess)).toEqual(expectedResult);
    });
  
    it('should handle postVideoFailure', () => {
      const expectedResult = {
        videos: {
          videos: [],
          statisticData: [],
          reladtedVideos: [],
          relatedStatistic: [],
          comments: [],
          playlist: [],
          playlistVideos: [],
          isFetching: false,
          error: 'error',
          isPosting: false,
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };
  
      const postVideoFailure = {
        type: VideoTypes.POST_VIDEO_FAILURE,
        isPosting: false,
        error: 'error'
      };
  
      expect(reducer({}, postVideoFailure)).toEqual(expectedResult);
    });
  });

  describe('Test login', () => {
    it('should handle loginSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: true,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };

      const loginSuccessAction = {
        type: LoginTypes.LOGIN_SUCCESS,
        isSignedIn: true
      };

      expect(reducer({}, loginSuccessAction)).toEqual(expectedResult);
    });

    it('should handle loginFailure', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: 'error 404'
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };

      const loginFailureAction = {
        type: LoginTypes.LOGIN_FAILURE,
        error: 'error 404'
      };

      expect(reducer({}, loginFailureAction)).toEqual(expectedResult);
    });

    it('should handle logoutSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };

      const logoutSuccessAction = {
        type: LoginTypes.LOGOUT_SUCCESS,
        isSignedIn: false
      };

      expect(reducer({}, logoutSuccessAction)).toEqual(expectedResult);
    });

    it('should handle logoutFailure', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: 'error 404'
        },
        user: {
          user: {},
          isFetching: false,
          error: null
        },
      };

      const logoutFailureAction = {
        type: LoginTypes.LOGOUT_FAILURE,
        error: 'error 404'
      };

      expect(reducer({}, logoutFailureAction)).toEqual(expectedResult);
    });
  });

  describe('Test user', () => {
    it('should handle fetchUser', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: true,
          error: null
        },
      };

      const fetchUserAction = {
        type: UserTypes.FETCH_USER,
      };

      expect(reducer({}, fetchUserAction)).toEqual(expectedResult);
    });

    it('should handle fetchUserSuccess', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {
            name: 'Tan'
          },
          isFetching: false,
          error: null
        },
      };

      const fetchUserSuccessAction = {
        type: UserTypes.FETCH_USER_SUCCESS,
        user: {
          name: 'Tan'
        }
      };

      expect(reducer({}, fetchUserSuccessAction)).toEqual(expectedResult);
    });

    it('should handle fetchUserFailure', () => {
      const expectedResult = {
        videos: {
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
        },
        login: {
          isSignedIn: false,
          error: null
        },
        user: {
          user: {},
          isFetching: false,
          error: 'Fail to load user'
        },
      };

      const fetchUserFailureAction = {
        type: UserTypes.FETCH_USER_FAILURE,
        error: 'Fail to load user'
      };

      expect(reducer({}, fetchUserFailureAction)).toEqual(expectedResult);
    });
  });
});