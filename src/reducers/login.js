import { Types } from '../actions/login';
import { createReducer } from 'reduxsauce';
import Immutable , { merge } from 'seamless-immutable';
import * as constant from '../constants/constants';
import { getItemStorage } from '../utils/storage';

// Get accessToken from storage
let accessToken = getItemStorage(constant.STORAGE_ACCESS_TOKEN);

// Check user already sign in
let initialIsSignedIn = accessToken ? true : false;

const initialState = Immutable({
  isSignedIn: initialIsSignedIn,
  error: null
});

const loginSuccess = (state = initialState, action) => {
  return merge(state, {
    isSignedIn: action.isSignedIn
  });
};

const loginFailure = (state = initialState, action) => {
  return merge(state, {
    error: action.error
  });
};

const logoutSuccess = (state = initialState, action) => {
  return merge(state, {
    isSignedIn: action.isSignedIn
  });
};

const logoutFailure = (state = initialState, action) => {
  return merge(state, {
    error: action.error
  });
};

//export login reducer to root reducer
const login = createReducer(initialState, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAILURE]: logoutFailure,
});

export default login;
