import React from 'react';
import Detail from './Detail';

const props = {
  match: {
    params: {
      id: 'Uk1hv6h7O1Y'
    }
  }
};

describe('Test detail', () => {
  const wrapper = shallow(<Detail {...props} />);

  it('should render correctly', () => {
    expect(wrapper.find('.row').exists()).toBe(true);
  });
});