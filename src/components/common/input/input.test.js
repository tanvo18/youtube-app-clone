import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';

const props = {
  inputType: 'text',
  inputClass: 'test-input',
  placeHolder: 'Write something',
  borderRadius: '4px',
  inputWidth: '100px',
  inputHeight: '20px',
  inputBorder: 'solid 1px #000',
  inputPadding: '10px'
};

describe('test input', () => {
  const handleKeyDown = jest.fn();
  it('should render an input', () => {
    const wrapper = shallow(<Input handleKeyDown={handleKeyDown} {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call function handle click', () => {
    const wrapper = shallow(<Input handleKeyDown={handleKeyDown} {...props} />);
    wrapper.simulate('keyDown', {keyCode: 13});
    expect(handleKeyDown.mock.calls.length).toBe(1);
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<Input handleKeyDown={handleKeyDown} {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});