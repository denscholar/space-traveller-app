import { combineReducers } from 'redux';
import rocketReducer from './RocketReducer';
import missionReducer from './MissionReducer';

const reducers = combineReducers({
  rocket: rocketReducer,
  missionReducer,

});

export default reducers;
