import React from 'react';
import Playlist from './Playlist';

describe('Test Playlist', () => {
  const wrapper = shallow(<Playlist />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});