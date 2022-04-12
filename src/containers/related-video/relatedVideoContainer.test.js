import React from 'react';
import { RelatedVideoContainer } from './RelatedVideoContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();describe('test RelatedVideoContainer', () => {
  let wrapper;
  let store;
  const initialState = {
    videos: {
      reladtedVideos: [{
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
      }],
      relatedStatistic: [{
        'statistics': {
          'viewCount': '1M',
          'likeCount': '128K',
          'dislikeCount': '1K',
          'favoriteCount': '0',
          'commentCount': '10027'
        }
      }],
      isFetching: false,
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<RelatedVideoContainer store={store} />);
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

  it('test pass props isFetching', () => {
    expect(wrapper.props().isFetching).toBe(false);
  });
});