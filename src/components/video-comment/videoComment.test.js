import React, { Component } from 'react';
import VideoComment from './VideoComment';
import renderer from 'react-test-renderer';

const props = {
  avatar: 'https://yt3.ggpht.com/-6Kja_qUGQIU/AAAAAAAAAAI/AAAAAAAAAAA/rEUlDi7aSTI/s28-c-k-no-mo-rj-c0xffffff/photo.jpg',
  username: 'Vibha Upadhyay',
  userComment: 'It is fun'
};

describe('test videoComment', () => {
  it('test user comment text', () => {
    const wrapper = shallow(<VideoComment {...props} />);
    expect(wrapper.find('.user-comment').text()).toBe('It is fun');
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<VideoComment {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});