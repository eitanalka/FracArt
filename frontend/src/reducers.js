import { combineReducers } from 'redux';
import { authReducer } from './app/duck';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
