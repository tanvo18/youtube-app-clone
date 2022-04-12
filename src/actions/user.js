import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchUser: ['accessToken'],
  fetchUserSuccess: ['user'],
  fetchUserFailure: ['error']
});

export { Types, Creators };
