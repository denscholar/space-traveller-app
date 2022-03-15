import { combineReducers } from 'redux';
import rocketReducer from './RocketReducer';

const reducers = combineReducers({
  rocket: rocketReducer,
});

export default reducers;
