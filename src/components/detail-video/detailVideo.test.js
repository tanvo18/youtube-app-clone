import React from 'react';
import DetailVideo from './DetailVideo';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

const props = {
  match: {
    params: {
      id: 'Uk1hv6h7O1Y'
    }
  },
  selectedVideo: {
    'snippet': {
      'publishedAt': 'Oct 15th 18',
      'title': 'Bazzi feat. Camila Cabello - Beautiful (Official Video)',
    },
  },
  selectedVideoStatistic: {
    'snippet': {
      'channelTitle': 'Funny channel',
      'publishedAt': 'Oct 15th 18',
      'title': 'Bazzi feat. Camila Cabello - Beautiful (Official Video)',
      'description': 'Download / stream BEAUTIFUL: https://Bazzi.lnk.to/BeautifulxCamilaAY \nCOSMIC: https://Bazzi.lnk.to/COSMICAY\n\nDirected by Jason Koenig https://www.instagram.com/jkoephoto/ \n\nSubscribe for more official content from Bazzi: https://Bazzi.lnk.to/Subscribe\n\nFollow Bazzi\nhttps://facebook.com/BazziWorldwide\nhttps://instagram.com/bazzi\nhttps://twitter.com/bazzi\nhttps://soundcloud.com/bazziworldwide\nhttp://bazziofficial.com\n\nThe official YouTube channel of Atlantic Records artist Bazzi. Subscribe for the latest music videos, performances, and more.',
    },

    'statistics': {
      'viewCount': '1M',
      'likeCount': '193K',
      'dislikeCount': '3K',
      'favoriteCount': '0',
      'commentCount': '12121'
    }
  },
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
  videoUrl: 'http://www.youtube.com/embed/Uk1hv6h7O1Y',
  getSelectedVideo: jest.fn(),
  getComments: jest.fn(),
};

const emptyComments = {
  match: {
    params: {
      id: 'Uk1hv6h7O1Y'
    }
  },
  selectedVideo: {
    'snippet': {
      'publishedAt': 'Oct 15th 18',
      'title': 'Bazzi feat. Camila Cabello - Beautiful (Official Video)',
    },
  },
  selectedVideoStatistic: {
    'snippet': {
      'channelTitle': 'Funny channel',
      'publishedAt': 'Oct 15th 18',
      'title': 'Bazzi feat. Camila Cabello - Beautiful (Official Video)',
      'description': 'Download / stream BEAUTIFUL: https://Bazzi.lnk.to/BeautifulxCamilaAY \nCOSMIC: https://Bazzi.lnk.to/COSMICAY\n\nDirected by Jason Koenig https://www.instagram.com/jkoephoto/ \n\nSubscribe for more official content from Bazzi: https://Bazzi.lnk.to/Subscribe\n\nFollow Bazzi\nhttps://facebook.com/BazziWorldwide\nhttps://instagram.com/bazzi\nhttps://twitter.com/bazzi\nhttps://soundcloud.com/bazziworldwide\nhttp://bazziofficial.com\n\nThe official YouTube channel of Atlantic Records artist Bazzi. Subscribe for the latest music videos, performances, and more.',
    },

    'statistics': {
      'viewCount': '1M',
      'likeCount': '193K',
      'dislikeCount': '3K',
      'favoriteCount': '0',
      'commentCount': '12121'
    }
  },
  comments: [],
};

const undefinedSelectedVideo = {
  match: {
    params: {
      id: 'Uk1hv6h7O1Y'
    }
  },
  selectedVideo: undefined,
  
};

describe('test detail video', () => {
  const wrapper = shallow(<DetailVideo {...props}/>);

  it('Check props getSelectedVideo function works', () => {
    wrapper.instance().componentDidMount();
    expect(props.getSelectedVideo).toHaveBeenCalled();
  });

  it('Check props getComments function works', () => {
    wrapper.instance().componentDidMount();
    expect(props.getComments).toHaveBeenCalled();
  });

  it('Check empty comment', () => {
    const wrapper = shallow(<DetailVideo {...emptyComments}/>);
    expect(wrapper.find('.list-comment').text()).toBe('There are no comments');
    expect(wrapper.find('Indicator').exists()).toBe(false);
  });

  it('Check undefined data', () => {
    const wrapper = shallow(<DetailVideo {...undefinedSelectedVideo}/>);
    expect(wrapper.find('.list-comment').exists()).toBe(false);
    expect(wrapper.find('Indicator').exists()).toBe(true);
  });

  it('should show detail title', () => {
    expect(wrapper.find('.detail-title').props().children).toBe('Bazzi feat. Camila Cabello - Beautiful (Official Video)');
  });

  it('should render correctly', () => {
    const tree = shallow(<DetailVideo {...props}/>);
    expect(tree).toMatchSnapshot();
  });

  // describe('test componentWillReceiveProps', () => {
  //   const wrapper = shallow(<DetailVideo isPosting={true} {...props}/>);
    
  //   wrapper.setProps({
  //     children: React.cloneElement(wrapper.props().children, {
  //       isPosting: false
  //     })
  //   });
  //   console.log('lalala' , wrapper.dive().find('CommentInputGroup').debug());
  // });
});