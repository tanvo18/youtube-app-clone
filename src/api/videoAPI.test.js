import MockAdapter from 'axios-mock-adapter';
import { create } from 'apisauce';
import * as videoAPI from './videoAPI';
import * as constant from '../constants/constants';

describe('Test videoAPI', () => {
  const api = create({
    baseURL: constant.BASE_URL
  });
  const mock = new MockAdapter(api.axiosInstance);
  const videoId = 'cBVGlBWQzuc';

  it('should getPopularVideo', async () => {
    const expectedResult = {
      videos: [
        {
          'kind': 'youtube#video',
          'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bImmdKn-oBhREMLFIIIiIKcWaT0"',
          'id': 'cBVGlBWQzuc',
          'snippet': {
            'publishedAt': 'a day ago',
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
          },
          'statistics': {
            'viewCount': '1M',
            'likeCount': '128K',
            'dislikeCount': '1K',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        },
        {
          'kind': 'youtube#video',
          'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bImmdKn-oBhREMLFIIIiIKcWaT0"',
          'id': '123asdsad',
          'snippet': {
            'publishedAt': 'a day ago',
            'channelId': 'UCN1hnUccO4FD5WfM7ithXaw',
            'title': 'Football',
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
          },
          'statistics': {
            'viewCount': '1M',
            'likeCount': '128K',
            'dislikeCount': '1K',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        },
      ]
    };

    mock.onGet('/videos').reply(200, expectedResult);

    const response = await videoAPI.getPopularVideos(api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should getVideosById if id match video', async () => {
    const expectedResult = {
      items: [
        {
          'kind': 'youtube#video',
          'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bImmdKn-oBhREMLFIIIiIKcWaT0"',
          'id': 'cBVGlBWQzuc',
          'snippet': {
            'publishedAt': 'a day ago',
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
          },
          'statistics': {
            'viewCount': '1M',
            'likeCount': '128K',
            'dislikeCount': '1K',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        }
      ]
    };

    const videoId = 'cBVGlBWQzuc';
    mock.onGet('/videos').reply(200, expectedResult);

    const response = await videoAPI.getVideosById(videoId, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should getVideosById and get empty videos if id not exist', async () => {
    const expectedResult = {
      items: []
    };

    const videoId = 'idNotExist';
    mock.onGet('/videos').reply(200, expectedResult);

    const response = await videoAPI.getVideosById(videoId, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should getStatisticById if id match video', async () => {
    const expectedResult = {
      items: [
        {
          'kind': 'youtube#video',
          'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bImmdKn-oBhREMLFIIIiIKcWaT0"',
          'id': 'cBVGlBWQzuc',
          'snippet': {
            'publishedAt': 'a day ago',
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
          },
          'statistics': {
            'viewCount': '1M',
            'likeCount': '128K',
            'dislikeCount': '1K',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        }
      ]
    };
    mock.onGet('/videos').reply(200, expectedResult);

    const response = await videoAPI.getStatisticById(videoId, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should getStatisticById and get empty statistic if id not exist', async () => {
    const expectedResult = {
      items: []
    };
    mock.onGet('/videos').reply(200, expectedResult);

    const response = await videoAPI.getStatisticById(videoId, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should searchVideoByKeyword and get result if match keyword', async () => {
    const expectedResult = {
      items: [
        {
          'kind': 'youtube#video',
          'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bImmdKn-oBhREMLFIIIiIKcWaT0"',
          'id': 'cBVGlBWQzuc',
          'snippet': {
            'publishedAt': 'a day ago',
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
          },
          'statistics': {
            'viewCount': '1M',
            'likeCount': '128K',
            'dislikeCount': '1K',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        }
      ]
    };
    mock.onGet('/search').reply(200, expectedResult);

    const keyword = 'Girls Like You';
    const response = await videoAPI.searchVideoByKeyword(keyword, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should searchVideoByKeyword and get empty if not match keyword', async () => {
    const expectedResult = {
      items: []
    };
    mock.onGet('/search').reply(200, expectedResult);

    const keyword = '^^^^^^';
    const response = await videoAPI.searchVideoByKeyword(keyword, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should searchRelatedVideo', async () => {
    const expectedResult = {
      items: [
        {
          'kind': 'youtube#searchResult',
          'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/A-HD3Nl9Q3AL-2xPUjA7Od0s-Ug"',
          'id': {
            'kind': 'youtube#video',
            'videoId': 'e-ORhEE9VVg'
          },
          'snippet': {
            'publishedAt': '2014-11-08T01:43:24.000Z',
            'channelId': 'UCANLZYMidaCbLQFWXBC95Jg',
            'title': 'Taylor Swift - Blank Space',
            'description': 'No animals, trees, automobiles or actors were harmed in the making of this video.  \n\nListen to 1989 from Taylor Swift here: https://taylor.lnk.to/1989dlxID    \n\nShop official Taylor Swift merch here: http://taylor.lk/merch\n\nhttp://www.vevo.com/watch/USCJY1431509?utm_source=youtube&utm_medium=description&utm_campaign=ytd',
            'thumbnails': {
              'default': {
                'url': 'https://i.ytimg.com/vi/e-ORhEE9VVg/default.jpg',
                'width': 120,
                'height': 90
              },
              'medium': {
                'url': 'https://i.ytimg.com/vi/e-ORhEE9VVg/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              'high': {
                'url': 'https://i.ytimg.com/vi/e-ORhEE9VVg/hqdefault.jpg',
                'width': 480,
                'height': 360
              }
            },
            'channelTitle': 'TaylorSwiftVEVO',
            'liveBroadcastContent': 'none'
          }
        }
      ]
    };
    mock.onGet('/search').reply(200, expectedResult);

    const response = await videoAPI.searchRelatedVideo(videoId, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should getVideoComment', async () => {
    const expectedResult = {
      items: []
    };
    mock.onGet('/commentThreads').reply(200, expectedResult);

    const response = await videoAPI.getVideoComment(videoId, api);
    expect(response.data).toEqual(expectedResult);
  });

  it('should getPlaylist', async () => {
    const expectedData = {
      response: {
        status: 200,
        result: {
          items: [
            {
              'kind': 'youtube#playlist',
              'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/L2lgaQckOdqYOinOTSh7rXWLhFs"',
              'id': 'PLYD4txFCoRIddpm1qaxj39HW0odA4Ojie',
              'snippet': {
                'publishedAt': '2018-02-17T22:36:32.000Z',
                'channelId': 'UCM6UtOuKhYDX2Q76rz_-Zug',
                'title': 'Soundtrack',
                'description': '',
                'thumbnails': {
                  'default': {
                    'url': 'https://i.ytimg.com/vi/CuzRarStqAI/default.jpg',
                    'width': 120,
                    'height': 90
                  },
                  'medium': {
                    'url': 'https://i.ytimg.com/vi/CuzRarStqAI/mqdefault.jpg',
                    'width': 320,
                    'height': 180
                  },
                  'high': {
                    'url': 'https://i.ytimg.com/vi/CuzRarStqAI/hqdefault.jpg',
                    'width': 480,
                    'height': 360
                  },
                  'standard': {
                    'url': 'https://i.ytimg.com/vi/CuzRarStqAI/sddefault.jpg',
                    'width': 640,
                    'height': 480
                  }
                },
                'channelTitle': 'Tan Vo',
                'localized': {
                  'title': 'Soundtrack',
                  'description': ''
                }
              },
              'contentDetails': {
                'itemCount': 35
              }
            }
          ]
        }
      }
    };

    videoAPI.getPlaylist = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve(expectedData);
      });
    });

    const result = await videoAPI.getPlaylist();
    expect(result).toEqual(expectedData);
  });

  it('should getVideoFromPlaylist', async () => {
    const expectedData = {
      response: {
        status: 200,
        result: {
          items: [
            {
              'kind': 'youtube#playlistItem',
              'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/A-HD3Nl9Q3AL-2xPUjA7Od0s-Ug"',
              'id': {
                'kind': 'youtube#video',
                'videoId': 'e-ORhEE9VVg'
              },
              'snippet': {
                'publishedAt': '2014-11-08T01:43:24.000Z',
                'channelId': 'UCANLZYMidaCbLQFWXBC95Jg',
                'title': 'Taylor Swift - Blank Space',
                'description': 'No animals, trees, automobiles or actors were harmed in the making of this video.  \n\nListen to 1989 from Taylor Swift here: https://taylor.lnk.to/1989dlxID    \n\nShop official Taylor Swift merch here: http://taylor.lk/merch\n\nhttp://www.vevo.com/watch/USCJY1431509?utm_source=youtube&utm_medium=description&utm_campaign=ytd',
                'thumbnails': {
                  'default': {
                    'url': 'https://i.ytimg.com/vi/e-ORhEE9VVg/default.jpg',
                    'width': 120,
                    'height': 90
                  },
                  'medium': {
                    'url': 'https://i.ytimg.com/vi/e-ORhEE9VVg/mqdefault.jpg',
                    'width': 320,
                    'height': 180
                  },
                  'high': {
                    'url': 'https://i.ytimg.com/vi/e-ORhEE9VVg/hqdefault.jpg',
                    'width': 480,
                    'height': 360
                  }
                },
                'channelTitle': 'TaylorSwiftVEVO',
                'liveBroadcastContent': 'none'
              }
            }
          ]
        }
      }
    };

    videoAPI.getVideoFromPlaylist = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve(expectedData);
      });
    });

    const result = await videoAPI.getVideoFromPlaylist();
    expect(result).toEqual(expectedData);
  });

  it('should insertComment', async () => {
    const expectedData = {
      response: {
        status: 200,
      }
    };

    videoAPI.insertComment = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve(expectedData);
      });
    });

    const result = await videoAPI.insertComment();
    expect(result).toEqual(expectedData);
  });

  it('should uploadVideoAPI', async () => {
    const expectedData = {
      response: {
        status: 200,
      }
    };
    const selectedFile = {};
   
    videoAPI.uploadVideoAPI = jest.fn().mockImplementation((selectedFile) => {
      return new Promise((resolve, reject) => {
        resolve(expectedData);
      });
    });

    const result = await videoAPI.uploadVideoAPI(selectedFile);
    expect(result).toEqual(expectedData);
  });
});
