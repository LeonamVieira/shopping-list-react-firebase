import { combineReducers } from 'redux';
import authReducer from './auth';
import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
