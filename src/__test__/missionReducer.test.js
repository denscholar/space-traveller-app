import missionReducer, { missionReserve } from '../Redux/Missions/MissionReducer';

describe('Inital state of the reducer', () => {
  test('test intial state: ', () => {
    expect(missionReducer(undefined, {})).toEqual({
      missions: [],
    });
  });
});

describe('Reserve mission test', () => {
  test('should return missions.reserved as false: ', () => {
    const exampleInitialState = {
      missions: [
        {
          id: '9D1B7E0',
          reserved: true,
        },
      ],
    };
    expect(missionReducer(exampleInitialState, missionReserve('9D1B7E0'))).toEqual(
      {
        missions: [
          {
            id: '9D1B7E0',
            reserved: false,
          },
        ],
      },
    );
  });
});
