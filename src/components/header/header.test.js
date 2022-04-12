import React from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

const props = {
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
  },
};

describe('test header', () => {
  it('test function searchVideo works', () => {
    const login = {
      isSignedIn: true
    };
    const searchVideo = jest.fn();
    const wrapper = mount(<Router>
      <Header login={login} searchVideo={searchVideo} {...props} />
    </Router>);
    wrapper.find('Button').simulate('click');
    expect(searchVideo).toHaveBeenCalled();
  });

  it('test function loginRequest works', () => {
    const login = {
      isSignedIn: false
    };
    const loginRequest = jest.fn();
    const wrapper = mount(<Router>
      <Header login={login} loginRequest={loginRequest} {...props} />
    </Router>);
    const btnLogin = wrapper.find('.btn-login').at(1);
    btnLogin.simulate('click');
    expect(loginRequest).toHaveBeenCalled();
  });

  it('test function logoutRequest works', () => {
    const login = {
      isSignedIn: true
    };
    const logoutRequest = jest.fn();
    const wrapper = mount(<Router>
      <Header
        login={login}
        logoutRequest={logoutRequest}
        {...props} />
    </Router>);
    const logoutLink = wrapper.find('.logout-link').at(1);
    logoutLink.simulate('click');
    expect(logoutRequest).toHaveBeenCalled();
  });

  it('test handle key down', () => {
    const login = {
      isSignedIn: true
    };

    const history = { 'length': 3, 'action': 'PUSH', push: jest.fn(), 'location': { 'pathname': '/search', 'search': '', 'hash': '', 'key': 's7js0s' } };
    const searchVideo = jest.fn();
    const header = <Router>
      <Header
        login={login}
        searchVideo={searchVideo}
        history={history}
        {...props} />
    </Router>;

    const wrapper = mount(header);
    const searchInput = wrapper.find('input');
    searchInput.simulate('keyDown', { keyCode: 13 });
    expect(searchVideo).toHaveBeenCalled();
  });

  it('should render dropdown when signed in', () => {
    const login = {
      isSignedIn: true
    };
    const loginRequest = jest.fn();
    const wrapper = mount(<Router>
      <Header login={login} loginRequest={loginRequest} {...props} />
    </Router>);

    const btnLogin = wrapper.find('.btn-login').at(1);
    const dropdown = wrapper.find('.dropdown');
    expect(dropdown.exists()).toBe(true);
    expect(btnLogin.exists()).toBe(false);
  });

  it('should render btnLogin when not signed in', () => {
    const login = {
      isSignedIn: false
    };
    const loginRequest = jest.fn();
    const wrapper = mount(<Router>
      <Header login={login} loginRequest={loginRequest} {...props} />
    </Router>);

    const btnLogin = wrapper.find('.btn-login').at(1);
    const dropdown = wrapper.find('.dropdown');
    expect(btnLogin.exists()).toBe(true);
    expect(dropdown.exists()).toBe(false);
  });

  it('should render correctly', () => {
    const login = {
      isSignedIn: false
    };
    const loginRequest = jest.fn();
    const tree = renderer
      .create(<Router><Header login={login} loginRequest={loginRequest} {...props} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});