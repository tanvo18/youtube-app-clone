import React from 'react';
import NotFound from './NotFound';

describe('Test NotFound page', () => {
  const wrapper = shallow(<NotFound />);

  it('should render correctly', () => {
    expect(wrapper.find('h3').text()).toEqual('404 page not found');
  });
});