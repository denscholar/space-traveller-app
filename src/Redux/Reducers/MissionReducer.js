import axios from 'axios';

const SET_MISSIONS_DATA = 'SET_MISSIONS_DATA';

const initialState = {
  missions: [],
};

export const missionArr = (response) => {
  response.map((mission) => (
    initialState.missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    })
  ));
  return initialState;
};

export const setMission = () => async (dispatch) => {
  const response = axios.get('https://api.spacexdata.com/v3/missions');
  dispatch({
    type: SET_MISSIONS_DATA,
    payload: missionArr(response),
  });
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS_DATA:
      return { ...action, mission: payload };

    default:
      return state;
  }
};

export default missionReducer;
