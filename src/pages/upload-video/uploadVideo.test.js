import React from 'react';
import UploadVideo from './UploadVideo';

describe('Test UploadVideo', () => {
  const wrapper = shallow(<UploadVideo />);

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});