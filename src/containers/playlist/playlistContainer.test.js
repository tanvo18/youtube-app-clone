import React from 'react';
import { PlaylistContainer } from './PlaylistContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('test PlaylistContainer', () => {
  let wrapper;
  let store;
  const initialState = {
    videos: {
      playlist: [
        {
          'id': 'PLYD4txFCoRIddpm1qaxj39HW0odA4Ojie',
          'snippet': {
            'publishedAt': '2018-02-17T22:36:32.000Z',
            'channelId': 'UCM6UtOuKhYDX2Q76rz_-Zug',
            'title': 'Soundtrack',
            'description': '',
            'thumbnails': {
              'medium': {
                'url': 'https://i.ytimg.com/vi/CuzRarStqAI/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
            },
            'channelTitle': 'Tan Vo',
          },
          'contentDetails': {
            'itemCount': 35
          }
        },
      ],
      isFetching: false
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<PlaylistContainer store={store} />);
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('test pass props playlist', () => {
    expect(wrapper.props().playlist.length).toBe(1);
  });

  it('test pass props isFetching', () => {
    expect(wrapper.props().isFetching).toBe(false);
  });
});