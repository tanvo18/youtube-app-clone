import {
  takeLatest,
  call
} from 'redux-saga/effects';

import { cloneableGenerator } from 'redux-saga/utils';
import {
  watchOAuthSaga,
  watchSignInClick,
  watchSignOutClick,
  handleSignOutClick,
  handleSignInClick
} from './oAuthSaga';
import { Types as LoginTypes } from '../actions/login';

describe('Test oAuthSaga', () => {
  describe('Test watchOAuthSaga', () => {
    const gen = cloneableGenerator(watchOAuthSaga)();

    it('should takeLatest watchSignInClick', () => {
      expect(gen.next().value).toEqual(takeLatest(LoginTypes.LOGIN_REQUEST, watchSignInClick));
    });

    it('should takeLatest watchOAuthSaga', () => {
      expect(gen.next().value).toEqual(takeLatest(LoginTypes.LOGOUT_REQUEST, watchSignOutClick));
    });

    it('it should be done', () => {
      expect(gen.next().done).toBe(true);
    });
  });

  describe('Test watchSignInClick', () => {
    const gen = cloneableGenerator(watchSignInClick)();

    it('should call handleSignInClick', () => {
      expect(gen.next().value).toEqual(call(handleSignInClick));
    });

    it('it should be done', () => {
      expect(gen.next().done).toBe(true);
    });
  });

  describe('Test watchSignOutClick', () => {
    const gen = cloneableGenerator(watchSignOutClick)();

    it('should call handleSignOutClick', () => {
      expect(gen.next().value).toEqual(call(handleSignOutClick));
    });

    it('it should be done', () => {
      expect(gen.next().done).toBe(true);
    });
  });
});