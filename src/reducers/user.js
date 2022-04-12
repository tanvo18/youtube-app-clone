import { Types } from '../actions/user';
import { createReducer } from 'reduxsauce';
import Immutable , { merge } from 'seamless-immutable';

const initialState = Immutable({
  user: {},
  isFetching: false,
  error: null
});

export const fetchUser = (state = initialState, action) => {
  return merge(state, {
    isFetching: true,
  });
};

export const fetchUserSuccess = (state = initialState, action) => {
  return merge(state, {
    user: action.user,
    isFetching: false,
  });
};

export const fetchUserFailure = (state = initialState, action) => {
  return merge(state, {
    error: action.error,
    isFetching: false,
  });
};

//export login reducer to root reducer
const user = createReducer(initialState, {
  [Types.FETCH_USER]: fetchUser,
  [Types.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [Types.FETCH_USER_FAILURE]: fetchUserFailure
});

export default user;
