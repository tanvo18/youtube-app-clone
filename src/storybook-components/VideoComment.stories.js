import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import VideoComment from '../components/video-comment/VideoComment';

const comment = {
  'kind': 'youtube#commentThread',
  'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/kolychlFQQpPMOBLuhWTIOGZChg"',
  'id': 'Ugx-9wPFDRujL9yJxIN4AaABAg',
  'snippet': {
    'videoId': 'YGpK6U56oHM',
    'topLevelComment': {
      'kind': 'youtube#comment',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/iixhDDTY_4qNH2HJV_a47UbGDJI"',
      'id': 'Ugx-9wPFDRujL9yJxIN4AaABAg',
      'snippet': {
        'authorDisplayName': 'Kai',
        'authorProfileImageUrl': 'https://yt3.ggpht.com/-3xgeWHKulEM/AAAAAAAAAAI/AAAAAAAAAAA/bzBUrJDIsgU/s28-c-k-no-mo-rj-c0xffffff/photo.jpg',
        'authorChannelUrl': 'http://www.youtube.com/channel/UCbxYFf2IFPWBVT2RHlfiYzA',
        'authorChannelId': {
          'value': 'UCbxYFf2IFPWBVT2RHlfiYzA'
        },
        'videoId': 'YGpK6U56oHM',
        'textDisplay': '13:23 that dude is gross man...',
        'textOriginal': '13:23 that dude is gross man...',
        'canRate': true,
        'viewerRating': 'none',
        'likeCount': 0,
        'publishedAt': '2018-09-07T07:22:47.000Z',
        'updatedAt': '2018-09-07T07:22:47.000Z'
      }
    },
    'canReply': true,
    'totalReplyCount': 0,
    'isPublic': true
  }
};

storiesOf('VideoComment', module)
  .add('video comment', () => (
    <VideoComment
      avatar={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
      username={comment.snippet.topLevelComment.snippet.authorDisplayName}
      userComment={comment.snippet.topLevelComment.snippet.textDisplay}
    />
  ));
