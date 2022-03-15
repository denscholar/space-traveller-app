import { combineReducers } from 'redux';
import rocketReducer from './RocketReducer';
import missionsReducer from './MissionReducer';

const reducers = combineReducers({
  rocket: rocketReducer,
  missionsReducer,
 
});

export default reducers;
