import { combineReducers } from 'redux';
import videos from './videos';
import login from './login';
import user from './user';

const rootReducers = combineReducers({
  videos,
  login,
  user
});

export default rootReducers;