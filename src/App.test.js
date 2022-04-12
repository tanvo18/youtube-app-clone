import React from 'react';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import RootRouter from './pages/router/RootRouter';
import App from './App';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('Test router', () => {
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
      isSignedIn: true
    },
    user: {
      'user': {
        'id': '103253251803252352082',
        'email': 'test@gmail.com',
        'verified_email': true,
        'name': 'Tan Vo',
        'given_name': 'Tan',
        'family_name': 'Vo',
        'link': 'https://plus.google.com/103253251803252352082',
        'picture': 'https://lh4.googleusercontent.com/-RZTNibkjm88/AAAAAAAAAAI/AAAAAAAAAJc/orvzalcw0uY/photo.jpg',
        'gender': 'male',
        'locale': 'en'
      },
      'isFetching': false,
      'error': null,
    }
  };


  it('should render destination link ', () => {
    store = mockStore(initialState);

    const wrapper = mount(
      <MemoryRouter initialEntries={['/', '/upload-video']} initialIndex={1}>
        <App store={store} />
      </MemoryRouter>
    );
    expect(wrapper.find('.dropdown-menu').find('Link').at(0).props().to).toBe('/playlist');
    expect(wrapper.find('.dropdown-menu').find('Link').at(1).props().to).toBe('/upload-video');
  });
});