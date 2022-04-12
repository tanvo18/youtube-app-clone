import React from 'react';
import { UploadVideoContainer } from './UploadVideoContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore(); describe('test UploadVideoContainer', () => {
  let wrapper;
  let store;
  const initialState = {
    videos: {
      isPosting: false
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<UploadVideoContainer store={store} />);
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('test pass props videos', () => {
    expect(wrapper.props().isPosting).toBe(false);
  });
});