import React, { Component } from 'react';
import UploadVideo from './UploadVideo';
import renderer from 'react-test-renderer';

describe('test UploadVideo', () => {
  const postVideo = jest.fn();


  it('test upload button exists', () => {
    const wrapper = shallow(<UploadVideo
      isPosting={false}
      postVideo={postVideo} />);
    expect(wrapper.find('.upload-btn').exists()).toBe(true);
  });

  it('test loading when upload', () => {
    const wrapper = shallow(<UploadVideo
      isPosting={true}
      postVideo={postVideo} />);
    
    expect(wrapper.find('Indicator').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(false);
  });

  it('should render input when upload finish', () => {
    const wrapper = shallow(<UploadVideo
      isPosting={false}
      postVideo={postVideo} />);
    
    expect(wrapper.find('Indicator').exists()).toBe(false);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('test function when change file in input', () => {
    const wrapper = shallow(<UploadVideo
      isPosting={false}
      postVideo={postVideo} />);
    const fileContents = 'file contents';
    const file = new Blob([fileContents], { type: 'text/plain' });
    const fileInput = wrapper.find('input');
    fileInput.simulate('change', { target: { files: file } });
    expect(postVideo).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const tree = renderer
      .create(<UploadVideo
        isPosting={false}
        postVideo={postVideo} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});