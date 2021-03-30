import { combineReducers } from 'redux';
import userReducer from './user';
// import sportReducer from './sport';
import commentReducer from './comment';

const allReducers = combineReducers({
  // sport: sportReducer,
  user: userReducer,
  comment: commentReducer,
});

export default allReducers;
