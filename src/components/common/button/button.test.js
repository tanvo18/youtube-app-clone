import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

const props = {
  btnClass: 'btn-test', 
  text: 'Button test',
  btnBackground: 'transparent',
  textColor: '#8f8f8f',
  btnFontSize: '16px',
  borderRadius: '4px',
  borderColor: '#000',
  hoverBgColor: '#d9d9d9'
};

describe('test button', () => {
  it('should render a button', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button handleClick={handleClick} {...props} />);
    expect(wrapper.props().children).toBe('Button test');
  });

  it('should call function handle click', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button handleClick={handleClick} {...props} />);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('should render correctly', () => {
    const handleClick = jest.fn();
    const tree = renderer
      .create(<Button handleClick={handleClick} {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});