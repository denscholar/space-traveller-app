// these are the ACTIONS that dispatch to the reducers

import ActionTypes from '../Constants/ActionType';

const setRocket = (rockets) => ({
  type: ActionTypes.SET_ROCKET_DATA,
  payload: rockets,

});

export default setRocket;
