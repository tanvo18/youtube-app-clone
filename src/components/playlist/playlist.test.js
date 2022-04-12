import React from 'react';
import Playlist from './Playlist';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

const props = {
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
  ]
};

const propsEmptyThumbnail = {
  playlist: [
    {
      'id': 'PLYD4txFCoRIddpm1qaxj39HW0odA4Ojie',
      'snippet': {
        'publishedAt': '2018-02-17T22:36:32.000Z',
        'channelId': 'UCM6UtOuKhYDX2Q76rz_-Zug',
        'title': 'Soundtrack',
        'description': '',
        'thumbnails': undefined,
        'channelTitle': 'Tan Vo',
      },
      'contentDetails': {
        'itemCount': 35
      }
    },
  ]
};

describe('test playlist', () => {
  it('test requestPlaylist function', () => {
    const requestPlaylist = jest.fn();
    const wrapper = shallow(<Playlist 
      requestPlaylist={requestPlaylist}
      {...props}
    />);
    wrapper.instance().componentDidMount();
    expect(requestPlaylist).toHaveBeenCalled();
  });

  it('test data is fetching', () => {
    const requestPlaylist = jest.fn();
    const isFetching = true;
    const wrapper = mount(<Playlist 
      requestPlaylist={requestPlaylist}
      isFetching={isFetching}
      {...props}
    />);
    expect(wrapper.find('Indicator').find('div').exists()).toBe(true);
    expect(wrapper.find('.playlist-item').exists()).toBe(false);
  });

  it('test data fetched successfully', () => {
    const requestPlaylist = jest.fn();
    const isFetching = false;
    const wrapper = mount(<Router><Playlist 
      requestPlaylist={requestPlaylist}
      isFetching={isFetching}
      {...props}
    /></Router>);
    expect(wrapper.find('Indicator').find('div').exists()).toBe(false);
    expect(wrapper.find('.playlist-item').exists()).toBe(true);
  });

  it('test empty data', () => {
    const props = {playlist: []};
    const requestPlaylist = jest.fn();
    const wrapper = shallow(<Playlist 
      requestPlaylist={requestPlaylist}
      {...props}
    />);
    expect(wrapper.find('p').text()).toBe('There are no playlist');
    expect(wrapper.find('.playlist-item').exists()).toBe(false);
  });

  it('empty thumbnail', () => {
    const requestPlaylist = jest.fn();
    const wrapper = shallow(<Playlist 
      requestPlaylist={requestPlaylist}
      {...propsEmptyThumbnail}
    />);

    expect(wrapper.find('.thumbnail-img').exists()).toBe(true);
  });

  it('should render correctly', () => {
    const requestPlaylist = jest.fn();
    const isFetching = false;
    const tree = renderer
      .create(<Router><Playlist 
        requestPlaylist={requestPlaylist}
        isFetching={isFetching}
        {...props}
      /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

