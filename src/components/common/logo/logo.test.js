import React from 'react';
import Logo from './Logo';
import renderer from 'react-test-renderer';

const props = {
  logoWidth: '10px',
  logoHeight: '10px',
  logoImg: '../../assets/images/youtube.png',
  logoAlt: 'this is a logo',
  link: '/'
};

describe('test logo', () => {
  it('should render a logo', () => {
    const wrapper = shallow(<Logo {...props} />);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Logo {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});