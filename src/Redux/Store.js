import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rocketsReducer } from './Rockets/Rockets';
import missionReducer from './Missions/MissionReducer';

const reducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
