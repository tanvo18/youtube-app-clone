import React from 'react';
import { PlaylistDetailContainer } from './PlaylistDetailContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();describe('test PlaylistDetailContainer', () => {
  let wrapper;
  let store;
  const initialState = {
    videos: {
      playlistVideos: [
        {
          'id': 'PLYD4txFCoRIddpm1qaxj39HW0odA4Ojie',
          'snippet': {
            'publishedAt': '2018-02-17T22:36:32.000Z',
            'channelId': 'UCM6UtOuKhYDX2Q76rz_-Zug',
            'title': 'Football',
            'description': '',
            'thumbnails': {
              'default': {
                'url': 'https://i.ytimg.com/vi/YGpK6U56oHM/default.jpg',
                'width': 120,
                'height': 90
              },
            },
            'channelTitle': 'Tan Vo',
          },
          'contentDetails': {
            'videoId': 'FLqvTE1Eqfg',
          }
        },
      ]
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<PlaylistDetailContainer store={store} />);
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('test pass props playlistVideos', () => {
    expect(wrapper.props().playlistVideos.length).toBe(1);
  });
});