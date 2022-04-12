import React from 'react';
import { HeaderContainer } from './HeaderContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();describe('test HeaderContainer', () => {
  let wrapper;
  let store;
  const initialState = {
    login: {
      isSignedIn: true
    },
    user: {
      'user': {
        'id': '103253251803252352082',
        'email': 'test@gmail.com',
        'verified_email': true,
        'name': 'Tan Vo',
        'given_name': 'Tan',
        'family_name': 'Vo',
        'link': 'https://plus.google.com/103253251803252352082',
        'picture': 'https://lh4.googleusercontent.com/-RZTNibkjm88/AAAAAAAAAAI/AAAAAAAAAJc/orvzalcw0uY/photo.jpg',
        'gender': 'male',
        'locale': 'en'
      },
      'isFetching': false,
      'error': null,
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<HeaderContainer store={store} />);
  });

  it('render the connected component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('test pass props login', () => {
    expect(wrapper.props().login.isSignedIn).toBe(true);
  });

  it('test pass props user', () => {
    expect(wrapper.props().user.user.email).toBe('test@gmail.com');
  });
});