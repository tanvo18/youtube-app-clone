import React from 'react';
import HomePage from './HomePage';

describe('Test homepage', () => {
  const wrapper = shallow(<HomePage />);

  it('should render correctly', () => {
    expect(wrapper.dive().find('div').exists()).toBe(true);
  });
});