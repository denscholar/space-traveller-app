import getRockets from '../../Api/Rockets';

const ADD_ROCKET = 'space-traveller-app/rockets/ADD_ROCKET';

const initialState = [];

const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: ADD_ROCKET,
    payload: rockets,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export { getRocketsAction, rocketsReducer };
