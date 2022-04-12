import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // Action login app
  loginRequest: null,
  loginSuccess: ['isSignedIn'],
  loginFailure: ['error'],

  // Action logout app
  logoutRequest: null,
  logoutSuccess: ['isSignedIn'],
  logoutFailure: ['error'],
});

export { Types, Creators };
