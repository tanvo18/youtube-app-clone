import React from 'react';
import Indicator from './Indicator';
import renderer from 'react-test-renderer';

const props = {
  loadingType: 'spin',
  loadingColor: '#8b8d8e',
  loadingWidth: 60,
  loadingHeight: 60,
};

describe('test indicator', () => {
  it('render indicator', () => {
    const wrapper = mount(<Indicator {...props} />);
    expect(wrapper.find('Loading').props().color).toBe('#8b8d8e');
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Indicator {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});