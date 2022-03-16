import axios from 'axios';

const SET_MISSIONS_DATA = 'SET_MISSIONS_DATA';
const RESERVE_MISSION = 'RESERVE_MISSION';

const initialState = {
  missions: [],
};

export const missionReserve = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

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
  const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
  dispatch({
    type: SET_MISSIONS_DATA,
    payload: missionArr(data),
  });
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MISSIONS_DATA: {
      return { ...action.payload };
    }
    case RESERVE_MISSION: {
      const newState = state.missions.map((mission) => (mission.id !== action.payload
        ? mission : { ...mission, reserved: !mission.reserved }));
      return { ...state, missions: newState };
    }
    default:
      return state;
  }
};

export default missionReducer;
