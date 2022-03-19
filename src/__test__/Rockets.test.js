import {
  rocketsReducer, getRocketsAction, reserveRocketAction, cancelRocketAction,
} from '../Redux/Rockets/Rockets';

describe('Rockets reducer', () => {
  const list = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  it('return the redux state when there is a default action', () => {
    const exampleAction = () => ({
      type: 'EXAMPLE_ACTION',
      payload: {
        id: 1,
      },
    });
    expect(rocketsReducer([], exampleAction())).toStrictEqual([]);
  });

  it('store list in redux state', () => {
    expect(rocketsReducer([], getRocketsAction(list))).toStrictEqual([]);
  });

  it('reserve rocket with id 1', () => {
    expect(rocketsReducer(list, reserveRocketAction(1))).toStrictEqual([
      {
        id: 1,
        reserved: true,
      },
      {
        id: 2,
      },
    ]);
  });

  it('reserve rocket with id 2', () => {
    expect(rocketsReducer(list, reserveRocketAction(2))).toStrictEqual([
      {
        id: 1,
      },
      {
        id: 2,
        reserved: true,
      },
    ]);
  });

  it('cancel rocket reservation  with id 1', () => {
    expect(rocketsReducer(list, cancelRocketAction(1))).toStrictEqual([
      {
        id: 1,
        reserved: false,
      },
      {
        id: 2,
      },
    ]);
  });

  it('cancel rocket reservation  with id 2', () => {
    expect(rocketsReducer(list, cancelRocketAction(2))).toStrictEqual([
      {
        id: 1,
      },
      {
        id: 2,
        reserved: false,
      },
    ]);
  });
});
