import React from 'react';
import VideoItem from './VideoItem';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

const props = {
  video: {
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
    }
  },
  vidStatistic: {
    'statistics': {
      'viewCount': '1M',
      'likeCount': '128K',
      'dislikeCount': '1K',
      'favoriteCount': '0',
      'commentCount': '10027'
    }
  }
};

const searchResponse = {
  video: {
    'kind': 'youtube#video',
    'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bImmdKn-oBhREMLFIIIiIKcWaT0"',
    'id': {
      kind:'youtube#video',
      videoId: 'cBVGlBWQzuc'
    },
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
    }
  },
  vidStatistic: {
    'statistics': {
      'viewCount': '1M',
      'likeCount': '128K',
      'dislikeCount': '1K',
      'favoriteCount': '0',
      'commentCount': '10027'
    }
  }
};

describe('test VideoItem', () => {
  const handleClick = jest.fn();

  it('click video in list video', () => {
    const wrapper = shallow(<VideoItem 
      handleClick={handleClick}
      {...props} />);
    const listItem = wrapper.debug();
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });

  it('test video-title exists', () => {
    const wrapper = shallow(<VideoItem 
      handleClick={handleClick}
      {...searchResponse} />);
    expect(wrapper.find('.video-title').exists()).toBe(true);
  });

  it('should render video-title', () => {
    const wrapper = shallow(<VideoItem 
      handleClick={handleClick}
      {...searchResponse} />);
    expect(wrapper.find('.video-title').props().children).toBe('Maroon 5 - Girls Like You ft. Cardi B (Volume 2)');
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Router><VideoItem 
        handleClick={handleClick}
        {...props} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});