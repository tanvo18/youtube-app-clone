import React from 'react';
import { DetailVideoContainer } from './DetailVideoContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('test detailVideoContainer', () => {
  let wrapper;
  let store;
  const initialState = {
    videos: {
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
        }
      ],
      statisticData: [
        {
          'kind': 'youtube#video',
          'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/QKYIcBPd8bwSw1iqefGNRk4ZkeY"',
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
    
            },
            'channelTitle': 'Maroon5VEVO',
            'categoryId': '10',
          },
    
          'statistics': {
            'viewCount': '1M',
            'likeCount': '128K',
            'dislikeCount': '1K',
            'favoriteCount': '0',
            'commentCount': '10027'
          }
        },
      ],
      comments: [
        {
          'snippet': {
            'topLevelComment': {
              'snippet': {
                'authorDisplayName': 'Camila Chaos',
                'authorProfileImageUrl': 'https://yt3.ggpht.com/-vJblBetYylw/AAAAAAAAAAI/AAAAAAAAAAA/MrPbSyMdMvI/s28-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'authorChannelUrl': 'http://www.youtube.com/channel/UCl5T-ml4qO3Q1fHmWbAYSRw',
                'authorChannelId': {
                  'value': 'UCl5T-ml4qO3Q1fHmWbAYSRw'
                },
                'videoId': 'Uk1hv6h7O1Y',
                'textDisplay': 'consequences then beautiful. Jesus christ someone get me a valiam I\'m quaking',
                'textOriginal': 'consequences then beautiful. Jesus christ someone get me a valiam I\'m quaking',
              }
            },
          }
        }
      ],
    },
    login: {
      isSignedIn: false
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<DetailVideoContainer store={store} />);
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('test pass props videos', () => {
    expect(wrapper.props().videos.length).toBe(1);
  });

  it('test pass props statistic', () => {
    expect(wrapper.props().statisticData.length).toBe(1);
  });

  it('test pass props isSignedIn', () => {
    expect(wrapper.props().isSignedIn).toBe(false);
  });
});

