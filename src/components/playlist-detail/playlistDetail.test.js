import React from 'react';
import PlaylistDetail from './PlaylistDetail';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

const props = {
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
};

const emptyPlaylistVideo = {
  playlistVideos: []
};

const propsEmptyThumbnail = {
  playlistVideos: [
    {
      'id': 'PLYD4txFCoRIddpm1qaxj39HW0odA4Ojie',
      'snippet': {
        'publishedAt': '2018-02-17T22:36:32.000Z',
        'channelId': 'UCM6UtOuKhYDX2Q76rz_-Zug',
        'title': 'Football',
        'description': '',
        'thumbnails': undefined,
        'channelTitle': 'Tan Vo',
      },
      'contentDetails': {
        'videoId': 'FLqvTE1Eqfg',
      }
    },
  ]
};

describe('test playlistDetail', () => {

  const requestPlaylistVideo = jest.fn();

  it('test requestPlaylistVideo function works', () => {
    const wrapper = shallow(<PlaylistDetail 
      requestPlaylistVideo={requestPlaylistVideo}
      {...props}
    />);
    wrapper.instance().componentDidMount();
    expect(requestPlaylistVideo).toHaveBeenCalled();
  });

  it('test empty playlistVideo data', () => {
    const wrapper = shallow(<PlaylistDetail 
      requestPlaylistVideo={requestPlaylistVideo}
      isFetching={false}
      {...emptyPlaylistVideo}
    />);
    expect(wrapper.find('.playlist').text()).toBe('There are no playlist');
  });

  it('test indicator works', () => {
    const wrapper = shallow(<PlaylistDetail 
      requestPlaylistVideo={requestPlaylistVideo}
      isFetching={true}
      {...emptyPlaylistVideo}
    />);
    expect(wrapper.find('Indicator').exists()).toBe(true);
    expect(wrapper.find('.playlist-video-item').exists()).toBe(false);
  });

  it('test indicator disappear when we have data', () => {
    const wrapper = shallow(<PlaylistDetail 
      requestPlaylistVideo={requestPlaylistVideo}
      isFetching={false}
      {...props}
    />);
    expect(wrapper.find('Indicator').exists()).toBe(false);
    expect(wrapper.find('.playlist-video-item').exists()).toBe(true);
  });

  it('empty thumbnail', () => {
    const wrapper = shallow(<PlaylistDetail 
      requestPlaylistVideo={requestPlaylistVideo}
      {...propsEmptyThumbnail}
    />);

    expect(wrapper.find('.thumbnail-img').exists()).toBe(true);
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Router><PlaylistDetail 
        requestPlaylistVideo={requestPlaylistVideo}
        {...props}
      /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});