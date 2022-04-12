import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as api from '../api/userAPI';
import { Types as UserTypes } from '../actions/user';
import { watchGetUser } from './userSaga';
import {
  takeLatest,
  take,
  call,
  put
} from 'redux-saga/effects';

describe('test userSaga', () => {
  const accessToken = 'ya29.Gl0-Bu0UKfapTQX-1OGF3t9E3uiZU3QlOSOcPUCx0pfoIT784Q1PVMwynol';
  const error = new Error('Exception Error');

  it('test getUserInfo', () => {
    const response = {
      data: {
        'id':'11111111111111111',
        'email':'test@gmail.com',
        'verified_email':true,
        'name':'Tan Vo',
        'given_name':'Tan',
        'family_name':'Vo',
        'gender':'male',
        'locale':'en'
      },
      status: 200,
      ok: true,
  
    };
    return expectSaga(watchGetUser)
      .provide([[call(api.getUserInfo, accessToken), response]])
      .put({
        type: UserTypes.FETCH_USER_SUCCESS,
        user: response.data
      })
      .dispatch({ type: UserTypes.FETCH_USER, accessToken })
      .silentRun();
  });

  it('test getUserInfo fail', () => {
    const response = {
      originalError: {
        message: 'Request failed with status code 401'
      },
      status: 401,
      ok: false,
  
    };
    return expectSaga(watchGetUser)
      .provide([[call(api.getUserInfo, accessToken), response]])
      .put({
        type: UserTypes.FETCH_USER_FAILURE,
        error: response.originalError.message
      })
      .dispatch({ type: UserTypes.FETCH_USER, accessToken })
      .silentRun();
  });

  it('catch error getUserInfo fail', () => {
    return expectSaga(watchGetUser)
      .provide([[call(api.getUserInfo, accessToken), throwError(error)]])
      .put({
        type: UserTypes.FETCH_USER_FAILURE,
        error: error
      })
      .dispatch({ type: UserTypes.FETCH_USER, accessToken })
      .silentRun();
  });
});