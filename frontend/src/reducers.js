import { combineReducers } from 'redux';
import { authReducer } from './app/duck';
import createReducer from './app/create/duck';

const rootReducer = combineReducers({
  auth: authReducer,
  create: createReducer,
});

export default rootReducer;
