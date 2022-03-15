import ActionTypes from '../Constants/ActionType';

const initialState = {
  data: {
    name: 'peter',
    id: 1,
    category: 'plane',
  },
};
const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKET_DATA:
      return { ...state, products: payload };

    default:
      break;
  }
};
