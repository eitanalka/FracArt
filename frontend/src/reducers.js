import { combineReducers } from 'redux';
import { authReducer } from './app/duck';
import createReducer from './app/create/duck';
import profileReducer from './app/profile/duck';

const rootReducer = combineReducers({
  auth: authReducer,
  create: createReducer,
  profile: profileReducer,
});

export default rootReducer;
