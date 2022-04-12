import { Creators } from './user';

describe('actions user', () => {
  it('shoud create an action to fetch user', () => {
    const accessToken = 'AZB123';
    const expectedAction = {
      type: 'FETCH_USER',
      accessToken
    };

    expect(Creators.fetchUser(accessToken)).toEqual(expectedAction);
  });

  it('shoud create an action to fetch user success', () => {
    const user = {
      email: 'tanvo.bks2014@gmail.com',
      family_name: 'Vo',
      gender: 'male',
      given_name: 'Tan',
      name: 'Tan Vo'
    };
    const expectedAction = {
      type: 'FETCH_USER_SUCCESS',
      user
    };

    expect(Creators.fetchUserSuccess(user)).toEqual(expectedAction);
  });

  it('shoud create an action to fetch user fail', () => {
    const error = 'bad request';
    const expectedAction = {
      type: 'FETCH_USER_FAILURE',
      error
    };

    expect(Creators.fetchUserFailure(error)).toEqual(expectedAction);
  });
});