import { Creators } from './login';

describe('actions login', () => {
  it('shoud create an action to login request',  () => {
    const expectedAction = {
      type: 'LOGIN_REQUEST'
    };

    expect(Creators.loginRequest()).toEqual(expectedAction);
  });

  it('shoud create an action to login success',  () => {
    const isSignedIn = true;
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
      isSignedIn
    };

    expect(Creators.loginSuccess(isSignedIn)).toEqual(expectedAction);
  });

  it('shoud create an action to login fail',  () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'LOGIN_FAILURE',
      error
    };

    expect(Creators.loginFailure(error)).toEqual(expectedAction);
  });

  it('shoud create an action to logout request',  () => {
    const expectedAction = {
      type: 'LOGOUT_REQUEST'
    };

    expect(Creators.logoutRequest()).toEqual(expectedAction);
  });

  it('shoud create an action to logout success',  () => {
    const isSignedIn = false;
    const expectedAction = {
      type: 'LOGOUT_SUCCESS',
      isSignedIn
    };

    expect(Creators.logoutSuccess(isSignedIn)).toEqual(expectedAction);
  });

  it('shoud create an action to logout fail',  () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'LOGOUT_FAILURE',
      error
    };

    expect(Creators.logoutFailure(error)).toEqual(expectedAction);
  });
});