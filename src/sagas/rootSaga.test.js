import { all } from 'redux-saga/effects';
import { watchVideoSaga } from './videoSaga';
import { watchOAuthSaga } from './oAuthSaga';
import { watchGetUser } from './userSaga';
import rootSaga from './rootSaga';
import { cloneableGenerator } from 'redux-saga/utils';

describe('Test rootSaga', () => {
  const gen = cloneableGenerator(rootSaga)();
  it('should yield all', () => {
    expect(gen.next().value).toEqual(all([
      watchVideoSaga(),
      watchOAuthSaga(),
      watchGetUser(),
    ]));
  });
});