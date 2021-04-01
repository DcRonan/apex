import { combineReducers } from 'redux';
import userReducer from './user';
import sportReducer from './sport';

const allReducers = combineReducers({
  sport: sportReducer,
  user: userReducer,
});

export default allReducers;
