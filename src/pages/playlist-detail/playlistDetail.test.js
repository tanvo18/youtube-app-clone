import React from 'react';
import PlaylistDetail from './PlaylistDetail';

describe('Test PlaylistDetail', () => {
  const wrapper = shallow(<PlaylistDetail />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});