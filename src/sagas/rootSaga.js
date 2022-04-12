import { all } from 'redux-saga/effects';
import { watchVideoSaga } from './videoSaga';
import { watchOAuthSaga } from './oAuthSaga';
import { watchGetUser } from './userSaga';

function* rootSaga() {
  yield all([
    watchVideoSaga(),
    watchOAuthSaga(),
    watchGetUser(),
  ]);
}

export default rootSaga;
