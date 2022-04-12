import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import ChannelDescription from '../components/channel-description/ChannelDescription';

const video = {
  'kind': 'youtube#video',
  'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/5VIckIXJLJ6un3Qpt4pmG8Ecp00"',
  'id': 'YGpK6U56oHM',
  'snippet': {
    'publishedAt': '2018-09-06T17:00:35.000Z',
    'channelId': 'UCbpMy0Fg74eXXkvxJrtEn3w',
    'title': 'Brad Makes Beef Jerky | It\'s Alive | Bon Appétit',
    'description': 'Bon Appétit Test Kitchen Manager Brad Leone is back for episode 38 of “It’s Alive” and this time he\'s making beef jerky. Join Brad as he walks you through cutting, seasoning, and dehydrating two flavors of jerky.\r\n\r\nCheck out the recipes here!\r\nThe Old Timer:\r\n1¼ lb. eye of round beef\r\n3 Tbsp. pure maple syrup\r\n¼ cup Worcestershire sauce\r\n1 tsp. garlic powder\r\n1 tsp. onion powder\r\n1 tsp. kosher salt\r\n1 Tbsp. drained capers\r\n1 Tbsp. caper liquid\r\n1 tsp. chili powder\r\n¼ tsp. cayenne pepper\r\n½ tsp. dried oregano\r\n1½ tsp. Tellicherry pepper\r\n\r\nBringin’ the Funk:\r\n1¼ lb. beef\r\n10 dashes fish sauce\r\n2 Tbsp. honey\r\n3 Tbsp. soy sauce\r\n3 garlic cloves\r\n1 Fresno chile\r\n1 1" piece ginger\r\n¼ cup gochujang\r\n¼ tsp. Chinese five–spice powder\r\nSesame seeds (for topping)\r\n\r\nJoin Bon Appétit test kitchen manager, Brad Leone, on a wild, roundabout and marginally scientific adventure exploring fermented foods and more. From cultured butter and kombucha, to kimchi and miso, to beer and tepache, learn how to make fermented and live foods yourself. \n\nStill haven’t subscribed to Bon Appetit on YouTube? ►► http://bit.ly/1TLeyPn\r\n\r\nABOUT BON APPÉTIT\r\nCook with confidence using Bon Appetit’s kitchen tips, recipes, videos, and restaurant guides. Stay current on the latest food trends, dining destinations, and hosting ideas. \n\nBrad Makes Beef Jerky | It\'s Alive | Bon Appétit',
    'thumbnails': {
      'default': {
        'url': 'https://i.ytimg.com/vi/YGpK6U56oHM/default.jpg',
        'width': 120,
        'height': 90
      },
      'medium': {
        'url': 'https://i.ytimg.com/vi/YGpK6U56oHM/mqdefault.jpg',
        'width': 320,
        'height': 180
      },
      'high': {
        'url': 'https://i.ytimg.com/vi/YGpK6U56oHM/hqdefault.jpg',
        'width': 480,
        'height': 360
      },
      'standard': {
        'url': 'https://i.ytimg.com/vi/YGpK6U56oHM/sddefault.jpg',
        'width': 640,
        'height': 480
      },
      'maxres': {
        'url': 'https://i.ytimg.com/vi/YGpK6U56oHM/maxresdefault.jpg',
        'width': 1280,
        'height': 720
      }
    },
    'channelTitle': 'Bon Appétit',
    'tags': [
      'jerky',
      'what is',
      'brad',
      'brad leone',
      'it\'s alive',
      'alive',
      'fermented',
      'live food',
      'test kitchen',
      'how to make',
      'fermentation',
      'probiotics',
      'make',
      'bon appetit brad',
      'brad bon appetit',
      'brad makes',
      'brad it\'s alive',
      'brad makes beef jerky',
      'how to make beef jerky',
      'beef jerky recipe',
      'making beef jerky',
      'brad beef jerky',
      'best beef jerky',
      'make beef jerky',
      'how to make jerky',
      'beef jerky',
      'beef',
      'homemade beef jerky',
      'jerky beef',
      'make jerky',
      'jerky recipe',
      'making jerky',
      'food',
      'bon appetit'
    ],
    'categoryId': '26',
    'liveBroadcastContent': 'none',
    'localized': {
      'title': 'Brad Makes Beef Jerky | It\'s Alive | Bon Appétit',
      'description': 'Bon Appétit Test Kitchen Manager Brad Leone is back for episode 38 of “It’s Alive” and this time he\'s making beef jerky. Join Brad as he walks you through cutting, seasoning, and dehydrating two flavors of jerky.\r\n\r\nCheck out the recipes here!\r\nThe Old Timer:\r\n1¼ lb. eye of round beef\r\n3 Tbsp. pure maple syrup\r\n¼ cup Worcestershire sauce\r\n1 tsp. garlic powder\r\n1 tsp. onion powder\r\n1 tsp. kosher salt\r\n1 Tbsp. drained capers\r\n1 Tbsp. caper liquid\r\n1 tsp. chili powder\r\n¼ tsp. cayenne pepper\r\n½ tsp. dried oregano\r\n1½ tsp. Tellicherry pepper\r\n\r\nBringin’ the Funk:\r\n1¼ lb. beef\r\n10 dashes fish sauce\r\n2 Tbsp. honey\r\n3 Tbsp. soy sauce\r\n3 garlic cloves\r\n1 Fresno chile\r\n1 1" piece ginger\r\n¼ cup gochujang\r\n¼ tsp. Chinese five–spice powder\r\nSesame seeds (for topping)\r\n\r\nJoin Bon Appétit test kitchen manager, Brad Leone, on a wild, roundabout and marginally scientific adventure exploring fermented foods and more. From cultured butter and kombucha, to kimchi and miso, to beer and tepache, learn how to make fermented and live foods yourself. \n\nStill haven’t subscribed to Bon Appetit on YouTube? ►► http://bit.ly/1TLeyPn\r\n\r\nABOUT BON APPÉTIT\r\nCook with confidence using Bon Appetit’s kitchen tips, recipes, videos, and restaurant guides. Stay current on the latest food trends, dining destinations, and hosting ideas. \n\nBrad Makes Beef Jerky | It\'s Alive | Bon Appétit'
    },
    'defaultAudioLanguage': 'en-US'
  },
  'contentDetails': {
    'duration': 'PT18M14S',
    'dimension': '2d',
    'definition': 'hd',
    'caption': 'false',
    'licensedContent': true,
    'projection': 'rectangular'
  },
  'statistics': {
    'viewCount': '658778',
    'likeCount': '23908',
    'dislikeCount': '762',
    'favoriteCount': '0',
    'commentCount': '2486'
  }
};

storiesOf('ChannelDescription', module)
  .add('ChannelDescription', () => (
    <ChannelDescription

      channelTitle={video.snippet.channelTitle}
      publishedAt={`Published on ${video.snippet.publishedAt}`}
      description={video.snippet.description}
    />
  ));
