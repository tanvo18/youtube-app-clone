import React, { Component } from 'react';
import { CommentInputGroup } from './CommentInputGroup';
import renderer from 'react-test-renderer';

const props = {
  selectedVideo: {
    'kind': 'youtube#video',
    'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/VOegNYHvN1etfQAJjbOPbtj2g0k"',
    'id': 'InQH2BTiohs',
    'snippet': {
      'publishedAt': 'Oct 16th 18',
      'channelId': 'UCEdvpU2pFRCVqU6yIPyTpMQ',
      'title': 'The Ultimate Pancake Cook-off ft. Rhett and Link | Cooking with Marshmello',
      'description': 'Had to get Rhett and Link on #CookingWithMarshmello after yesterday\'s episode of Good Mythical Morning. \nWatch the episode here to find out "will it marshmallow?" ▶ https://youtu.be/ve8LCQgBtTM\nClick Here To Watch The Happier Music Video ▶ https://youtu.be/m7Bc3pLyij0\n\nNEW Mello™️ by Marshmello gear SHOP NOW ▶ http://mellogang.com\n\nJOYTIME II is Out Now! LISTEN HERE ▶ http://smarturl.it/JOYTIMEII\n\nWatch Gaming with Marshmello HERE ▶ http://youtube.com/playlist?list=PLcYK4PlHbZQvk3_Q6fbJy0xklOZ2aH7WP\n\nWatch Cooking with Marshmello HERE ▶ http://youtube.com/playlist?list=PLcYK4PlHbZQtXROf5fnrr4dO4ruWiv7ts\n\nSUBSCRIBE HERE ▶ http://youtube.com/marshmellomusic?sub_confirmation=1\n\nWATCH BAYEN HABEIT LYRIC VIDEO ▶ https://youtu.be/jNJCdxMf0t8\nWATCH STARS MUSIC VIDEO ▶ https://youtu.be/A57B7B6w3kw\nWATCH FLASHBACKS MUSIC VIDEO ▶ https://youtu.be/Lj-_mD0w474\nWATCH YOU CAN CRY MUSIC VIDEO ▶ https://youtu.be/2SJ0hgdciNE\nWATCH EVERYDAY MUSIC VIDEO ▶ https://youtu.be/bEdcJY8Emm8\nWATCH FLY MUSIC VIDEO ▶ https://youtu.be/oRArmtMA9AI\nWATCH FRIENDS MUSIC VIDEO ▶ https://youtu.be/jzD_yyEcp0M\nWATCH SPOTLIGHT MUSIC VIDEO ▶ https://youtu.be/7R1N-8SoqcM\nWATCH LOVE U MUSIC VIDEO ▶ https://youtu.be/D-pKeb6Wf4U\nWATCH TAKE IT BACK MUSIC VIDEO ▶ https://youtu.be/P9Ijqa_2eu0\nWATCH SILENCE MUSIC VIDEO ▶ https://youtu.be/Tx1sqYc3qas\nWATCH BLOCKS MUSIC VIDEO ▶ https://youtu.be/5E4ZBSInqUU\nWATCH YOU & ME MUSIC VIDEO ▶ https://youtu.be/fiusxyygqGk\nWATCH FIND ME MUSIC VIDEO ▶ https://youtu.be/ymq1WdGUcw8\nWATCH MOVING ON MUSIC VIDEO ▶ https://youtu.be/yU0tnrEk8H4\nWATCH SUMMER MUSIC VIDEO ▶ https://youtu.be/2vMH8lITTCE\nWATCH ALONE MUSIC VIDEO ▶ https://youtu.be/ALZHF5UqnU4\nWATCH KEEP IT MELLO MUSIC VIDEO ▶ https://youtu.be/_J_VpmXAzqg\n\nMARSHMELLO:\nMerch | http://mellogang.com/\nSpotify | http://spoti.fi/Marshmello\nApple Music | http://apple.co/2n8Evz6\nSoundCloud | http://soundcloud.com/marshmellomusic\nInstagram | http://instagram.com/marshmellomusic\nFacebook | http://facebook.com/marshmellomusic\nTwitter | http://twitter.com/marshmellomusic\nTwitch | http://twitch.tv/marshmellomusic\n\nFollow Rhett & Link: \nInstagram: https://instagram.com/rhettandlink\nFacebook: https://facebook.com/rhettandlink\nTwitter: https://twitter.com/rhettandlink\nWebsite: https://mythical.com/\n\nCredits:\nAgency: MGX CREATIVE\nDirector: Phillip Vernon\nCreative Director: Daniel Malikyar \nDirector of Photography: Tehillah De Castro\nEditor: Liam Tangum\nColorist: Kinan Chabani\n\nThe Ultimate Pancake Cook-off ft. Rhett and Link \n#Marshmello #RhettandLink #Cooking',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/InQH2BTiohs/default.jpg',
          'width': 120,
          'height': 90
        },
      },
      'channelTitle': 'Marshmello',
    },
  }
};

describe('test CommentInputGroup', () => {
  const postComment = jest.fn();
  const wrapper = mount(<CommentInputGroup
    postComment={postComment}
    {...props}
  />);

  it('test postComment without text in input', () => {
    window.alert = jest.fn();
    const btnSubmit = wrapper.find('.btn-submit').at(1);
    const commentInput = wrapper.find('.comment-box');
    btnSubmit.simulate('click');
    expect(window.alert).toHaveBeenCalled();
  });

  it('test postComment works', () => {
    const btnSubmit = wrapper.find('.btn-submit').at(1);
    const commentInput = wrapper.find('.comment-box');

    /*
     We need to set value for input ref like this to change content of input
     We cannot use simulate change because following doc, Enzyme just affect to the event call it
     It means we call simulate change it just affects to onChange event and not effect to real value of input
    */
    wrapper.instance().commentInput.value = 'this is awesome';
    btnSubmit.simulate('click');
    expect(postComment).toHaveBeenCalled();
  });

  it('test clear text in input when click cancel', () => {
    // console.log(wrapper.find('.btn-submit').at(1).debug());
    const btnCancel = wrapper.find('.btn-cancel').at(1);
    // Text in comment input
    wrapper.instance().commentInput.value = 'this is awesome';
    btnCancel.simulate('click');
    const commentInput = wrapper.find('input');
    // The text in commentInput is cleared
    expect(wrapper.instance().commentInput.value).toBe('');
  });

  it('test loading when post comment', () => {
    const wrapper = mount(<CommentInputGroup
      postComment={postComment}
      isPosting={true}
      {...props}
    />);

    expect(wrapper.find('Indicator').exists()).toBe(true);
    expect(wrapper.find('.comment-wrap').exists()).toBe(false);
  });

  it('test when post comment successful', () => {
    const wrapper = mount(<CommentInputGroup
      postComment={postComment}
      isPosting={false}
      {...props}
    />);

    expect(wrapper.find('Indicator').exists()).toBe(false);
    expect(wrapper.find('.comment-wrap').exists()).toBe(true);
  });

  it('test not pass props', () => {
    const wrapper = mount(<CommentInputGroup />);
    expect(wrapper.find('Indicator').exists()).toBe(false);
    expect(wrapper.find('.comment-wrap').exists()).toBe(true);
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<CommentInputGroup
        postComment={postComment}
        isPosting={false}
        {...props}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
