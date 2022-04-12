import {
  takeLatest,
  call,
  put
} from 'redux-saga/effects';
import * as api from '../api/userAPI';
import { Types as UserTypes } from '../actions/user';

/**
 * Get videos
 */
export function* getUserInfo({ accessToken }) {
  try {
    // get user information
    const response = yield call(api.getUserInfo, accessToken);
    
    if (response.status === 200) {
      // request user success
      yield put({
        type: UserTypes.FETCH_USER_SUCCESS,
        user: response.data
      });
    } else {
      yield put({
        type: UserTypes.FETCH_USER_FAILURE,
        error: response.originalError.message
      });
    }
  } catch (error) {
    
    yield put({
      type: UserTypes.FETCH_USER_FAILURE,
      error: error
    });
  }
};

/**
 * Watch get videos
 */
export function* watchGetUser() {
  yield takeLatest(UserTypes.FETCH_USER, getUserInfo);
}