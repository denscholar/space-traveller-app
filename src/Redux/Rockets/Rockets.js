import getRockets from '../../Api/Rockets';

const GET_ROCKETS = 'space-traveller-app/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'space-traveller-app/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'space-traveller-app/rockets/CANCEL_ROCKET';

const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const reserveRocketAction = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

const cancelRocketAction = (id) => ({
  type: CANCEL_ROCKET,
  payload: id,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });

    case CANCEL_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    }

    default:
      return state;
  }
};

export {
  getRocketsAction, reserveRocketAction, cancelRocketAction, rocketsReducer,
};
