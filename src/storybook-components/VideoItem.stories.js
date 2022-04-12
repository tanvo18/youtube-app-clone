import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import VideoItem from '../components/video-item/VideoItem';
import VideoListStyled from '../components/video-list/VideoListStyled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const video = {
  'kind': 'youtube#video',
  'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/5GBnJV97QwRtU4zC9AV4GsPIhBI"',
  'id': 'T8KHUj5noEQ',
  'snippet': {
    'publishedAt': '2018-09-05T12:17:35.000Z',
    'channelId': 'UCtinbF-Q-fVthA0qrFQTgXQ',
    'title': 'everything is changing',
    'description': 'Amazing song at the end;\nhttps://www.youtube.com/watch?v=m3sn8nllfIY\nSpotify, Deezer, Apple Music : http://hyperurl.co/u837oj\n\nIntro song: \nAllttA - AllttA (20syl & Mr. J. Medeiros) - https://soundcloud.com/alltta\n\nother tunes;\nhttps://soundcloud.com/bluewednesday\nwww.soundcloud.com/kaizerwolf',
    'thumbnails': {
      'default': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/default.jpg',
        'width': 120,
        'height': 90
      },
      'medium': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/mqdefault.jpg',
        'width': 320,
        'height': 180
      },
      'high': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/hqdefault.jpg',
        'width': 480,
        'height': 360
      },
      'standard': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/sddefault.jpg',
        'width': 640,
        'height': 480
      },
      'maxres': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/maxresdefault.jpg',
        'width': 1280,
        'height': 720
      }
    },
    'channelTitle': 'CaseyNeistat',
    'categoryId': '22',
    'liveBroadcastContent': 'none',
    'localized': {
      'title': 'everything is changing',
      'description': 'Amazing song at the end;\nhttps://www.youtube.com/watch?v=m3sn8nllfIY\nSpotify, Deezer, Apple Music : http://hyperurl.co/u837oj\n\nIntro song: \nAllttA - AllttA (20syl & Mr. J. Medeiros) - https://soundcloud.com/alltta\n\nother tunes;\nhttps://soundcloud.com/bluewednesday\nwww.soundcloud.com/kaizerwolf'
    },
    'defaultAudioLanguage': 'en'
  },
  'contentDetails': {
    'duration': 'PT7M29S',
    'dimension': '2d',
    'definition': 'hd',
    'caption': 'false',
    'licensedContent': true,
    'projection': 'rectangular'
  },
  'statistics': {
    'viewCount': '1070981',
    'likeCount': '47387',
    'dislikeCount': '1625',
    'favoriteCount': '0',
    'commentCount': '4065'
  }
};

const statistic = {
  'kind': 'youtube#video',
  'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/5GBnJV97QwRtU4zC9AV4GsPIhBI"',
  'id': 'T8KHUj5noEQ',
  'snippet': {
    'publishedAt': '2018-09-05T12:17:35.000Z',
    'channelId': 'UCtinbF-Q-fVthA0qrFQTgXQ',
    'title': 'everything is changing',
    'description': 'Amazing song at the end;\nhttps://www.youtube.com/watch?v=m3sn8nllfIY\nSpotify, Deezer, Apple Music : http://hyperurl.co/u837oj\n\nIntro song: \nAllttA - AllttA (20syl & Mr. J. Medeiros) - https://soundcloud.com/alltta\n\nother tunes;\nhttps://soundcloud.com/bluewednesday\nwww.soundcloud.com/kaizerwolf',
    'thumbnails': {
      'default': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/default.jpg',
        'width': 120,
        'height': 90
      },
      'medium': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/mqdefault.jpg',
        'width': 320,
        'height': 180
      },
      'high': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/hqdefault.jpg',
        'width': 480,
        'height': 360
      },
      'standard': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/sddefault.jpg',
        'width': 640,
        'height': 480
      },
      'maxres': {
        'url': 'https://i.ytimg.com/vi/T8KHUj5noEQ/maxresdefault.jpg',
        'width': 1280,
        'height': 720
      }
    },
    'channelTitle': 'CaseyNeistat',
    'categoryId': '22',
    'liveBroadcastContent': 'none',
    'localized': {
      'title': 'everything is changing',
      'description': 'Amazing song at the end;\nhttps://www.youtube.com/watch?v=m3sn8nllfIY\nSpotify, Deezer, Apple Music : http://hyperurl.co/u837oj\n\nIntro song: \nAllttA - AllttA (20syl & Mr. J. Medeiros) - https://soundcloud.com/alltta\n\nother tunes;\nhttps://soundcloud.com/bluewednesday\nwww.soundcloud.com/kaizerwolf'
    },
    'defaultAudioLanguage': 'en'
  },
  'contentDetails': {
    'duration': 'PT7M29S',
    'dimension': '2d',
    'definition': 'hd',
    'caption': 'false',
    'licensedContent': true,
    'projection': 'rectangular'
  },
  'statistics': {
    'viewCount': '1070981',
    'likeCount': '47387',
    'dislikeCount': '1625',
    'favoriteCount': '0',
    'commentCount': '4065'
  }
};

storiesOf('VideoItem', module)
  .add('video', () => (
    <Router>
      <VideoListStyled className="row video-list">
        <VideoItem
          video={video}
          vidStatistic={statistic}
        />
      </VideoListStyled>
    </Router>
  ));

