import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Types as LoginTypes } from '../actions/login';
import { Types as UserTypes } from '../actions/user';
import { CLIENT_ID, DISCOVERY_DOCS, SCOPES } from '../constants/constants';
import * as constant from '../constants/constants';
import { setItemStorage } from '../utils/storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [ sagaMiddleware, logger];

const store =  createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      ...middlewares
    ),
  )
);

sagaMiddleware.run(rootSaga);

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  window.gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  // When signin status changes, this function is called.
  // If the signin status is changed to signedIn, we make an API call.
  if (isSignedIn) {

    const user = window.gapi.auth2.getAuthInstance().currentUser.get();

    // Get access token from user
    const accessToken = user.Zi.access_token;

    // Save access token to localStorage
    setItemStorage(constant.STORAGE_ACCESS_TOKEN, accessToken);

    // Dispatch login success
    store.dispatch({
      type: LoginTypes.LOGIN_SUCCESS,
      isSignedIn: isSignedIn
    });

    // Dispatch fetchUser
    store.dispatch({
      type: UserTypes.FETCH_USER,
      accessToken: accessToken
    });
  } else {
    // Dispatch logout
    store.dispatch({
      type: LoginTypes.LOGOUT_SUCCESS,
      isSignedIn: isSignedIn
    });
  }
}

export function handleClientLoad() {
  window.gapi.load('client:auth2', initClient);
}

export let persisor = persistStore(store);

export default store;
