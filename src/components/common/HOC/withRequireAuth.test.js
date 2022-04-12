import React, { Component } from 'react';
import withRequireAuth from './withRequireAuth';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

class WrappedComponent extends Component {
  render() {
    return (
      <div className="authenticated">
        Authenticated
      </div>
    );
  }
}


describe('test withRequireAuth', () => {
  const Component = withRequireAuth(WrappedComponent);
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
      },
    };
    const history = {
      push: jest.fn()
    };
    store = mockStore(initialState);
    wrapper = mount(<Component
      store={store}
      history={history} />);
    expect(wrapper.find('.authenticated').exists()).toBe(true);
  });

  it('should not render component when not signed in', () => {
    const initialState = {
      videos: {
        videos: [],
        statisticData: []
      },
      login: {
        isSignedIn: false
      },
    };
    const history = {
      push: jest.fn()
    };
    store = mockStore(initialState);
    wrapper = mount(<Component
      store={store}
      history={history} />);
    expect(wrapper.find('.authenticated').exists()).toBe(true);

    wrapper.instance().componentWillUpdate();
    expect(history.push).toHaveBeenCalled();
  });

  it('should push to homepage when not signed in', () => {
    const initialState = {
      videos: {
        videos: [],
        statisticData: []
      },
      login: {
        isSignedIn: false
      },
    };
    const history = {
      push: jest.fn()
    };
    store = mockStore(initialState);
    wrapper = mount(<Component
      store={store}
      history={history} />);
    expect(wrapper.find('.authenticated').exists()).toBe(true);

    wrapper.instance().componentWillUpdate();
    expect(history.push).toHaveBeenCalled();
  });

  it('should not push to homepage when signed in', () => {
    const initialState = {
      videos: {
        videos: [],
        statisticData: []
      },
      login: {
        isSignedIn: true
      },
    };
    const history = {
      push: jest.fn()
    };
    store = mockStore(initialState);
    wrapper = mount(<Component
      store={store}
      history={history} />);
    expect(wrapper.find('.authenticated').exists()).toBe(true);
    expect(history.push).not.toHaveBeenCalled();
  });
});
