import React from 'react';
import withHideItem from './withHideItem';
import { CommentInputGroup } from '../../comment-input-group/CommentInputGroup';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('test withHideItem', () => {
  const Component = withHideItem(CommentInputGroup);
  let wrapper;
  let store;

  it('should render component when signed in', () => {
    const initialState = {
      videos: {
        videos: [],
        statisticData: []
      },
      login: {
        isSignedIn: true
      }
    };
    store = mockStore(initialState);
    wrapper = mount(<Component store={store} />);
    expect(wrapper.find('.comment-wrap').exists()).toBe(true);
  });

  it('should not render component when not signed in', () => {
    const initialState = {
      videos: {
        videos: [],
        statisticData: []
      },
      login: {
        isSignedIn: false
      }
    };
    store = mockStore(initialState);
    wrapper = mount(<Component store={store} />);
    expect(wrapper.find('.comment-wrap').exists()).toBe(false);
  });
});