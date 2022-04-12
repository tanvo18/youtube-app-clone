import React from 'react';
import VideoList from './VideoList';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

const props = {
  match: {
    params: {
      id: 'Uk1hv6h7O1Y'
    }
  },
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
  ]
};

const emptyVideos = {
  match: {
    params: {
      id: 'Uk1hv6h7O1Y'
    }
  },
  videos: [],
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
  ]
};

const emptyStatisticData = {
  match: {
    params: {
      id: 'Uk1hv6h7O1Y'
    }
  },
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
  statisticData: []
};

describe('test VideoList', () => {
  const fetchVideo = jest.fn();
  const searchRelatedVideo = jest.fn();
  const getSelectedVideo = jest.fn();
  const getComments = jest.fn();
  const clickVideoItem = jest.fn();

  it('test function fetchVideo works', () => {
    const wrapper = shallow(<VideoList fetchVideo={fetchVideo} {...props} />);
    wrapper.instance().componentDidMount();
    expect(fetchVideo).toHaveBeenCalled();
  });

  it('test function searchRelatedVideo works', () => {
    const wrapper = shallow(<VideoList searchRelatedVideo={searchRelatedVideo} {...props} />);
    wrapper.instance().componentDidMount();
    expect(searchRelatedVideo).toHaveBeenCalled();
  });

  it('test empty videos', () => {
    const wrapper = shallow(<VideoList
      searchRelatedVideo={searchRelatedVideo}
      isFetching={false}
      {...emptyVideos} />);
    expect(wrapper.find('.video-list div').text()).toBe('There are no videos');
  });

  it('test empty statisticData', () => {
    const wrapper = shallow(<VideoList
      searchRelatedVideo={searchRelatedVideo}
      isFetching={false}
      {...emptyStatisticData} />);
    expect(wrapper.find('.video-list div').text()).toBe('There are no videos');
  });

  it('test indicator loading data', () => {
    const wrapper = shallow(<VideoList
      searchRelatedVideo={searchRelatedVideo}
      isFetching={true}
      {...props} />);
    expect(wrapper.find('Indicator').exists()).toBe(true);
    expect(wrapper.find('.video-list').exists()).toBe(false);
  });

  it('should render video list and hide indicator if it has data', () => {
    const wrapper = shallow(<VideoList
      searchRelatedVideo={searchRelatedVideo}
      isFetching={false}
      {...props} />);
    expect(wrapper.find('Indicator').exists()).toBe(false);
    expect(wrapper.find('.video-list').exists()).toBe(true);
  });

  it('test clickVideoItem function works', () => {
    const wrapper = mount(<Router>
      <VideoList
        searchRelatedVideo={searchRelatedVideo}
        isFetching={false}
        clickVideoItem={clickVideoItem}
        {...props} />
    </Router>);
    const listItem = wrapper.find('VideoItem').find('.video-list-item').at(1);
    listItem.simulate('click');
    expect(clickVideoItem).toHaveBeenCalled();
  });


  describe('test componentWillUpdate ', () => {
    const wrapper = mount(<Router>
      <VideoList
        searchRelatedVideo={searchRelatedVideo}
        getSelectedVideo={getSelectedVideo}
        getComments={getComments}
        {...props} />
    </Router>);

    it('test searchRelatedVideo works in componentWillUpdate', () => {
      // Set Props to a component which is a child of a component
      wrapper.setProps({
        children: React.cloneElement(wrapper.props().children, {
          match: {
            params: {
              id: 'Zz0vv0h111A'
            }
          }
        })
      });
      expect(searchRelatedVideo).toHaveBeenCalled();
    });

    it('test getSelectedVideo works in componentWillUpdate', () => {
      // Set Props to a component which is a child of a component
      wrapper.setProps({
        children: React.cloneElement(wrapper.props().children, {
          match: {
            params: {
              id: 'Zz0vv0h111A'
            }
          }
        })
      });
      expect(getSelectedVideo).toHaveBeenCalled();
    });

    it('test getComments works in componentWillUpdate', () => {
      // Set Props to a component which is a child of a component
      wrapper.setProps({
        children: React.cloneElement(wrapper.props().children, {
          match: {
            params: {
              id: 'Zz0vv0h111A'
            }
          }
        })
      });
      expect(getComments).toHaveBeenCalled();
    });
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Router><VideoList fetchVideo={fetchVideo} {...props} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});