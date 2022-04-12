import {
  takeLatest,
  call
} from 'redux-saga/effects';
import { Types as LoginTypes } from '../actions/login';
import * as constant from '../constants/constants';
import { removeItemStorage } from '../utils/storage';

/**
 *  Sign in the user upon button click.
 */
export function handleSignInClick() {
  window.gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
export function handleSignOutClick(event) {
  // Remove access token in localStorage
  removeItemStorage(constant.STORAGE_ACCESS_TOKEN);

  window.gapi.auth2.getAuthInstance().signOut();
}

export function* watchSignInClick() {
  yield call(handleSignInClick);
}

export function* watchSignOutClick() {
  yield call(handleSignOutClick);
}

export function* watchOAuthSaga() {
  yield takeLatest(LoginTypes.LOGIN_REQUEST, watchSignInClick);
  yield takeLatest(LoginTypes.LOGOUT_REQUEST, watchSignOutClick);
}
