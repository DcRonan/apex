import { combineReducers } from 'redux';
import userReducer from './user';
import sportReducer from './sport';
import singleSportReducer from './singleSport';

const allReducers = combineReducers({
  sport: sportReducer,
  user: userReducer,
  singleSport: singleSportReducer,
});

export default allReducers;
