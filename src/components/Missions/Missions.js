import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionReserve, setMission } from '../../Redux/Missions/MissionReducer';

const Missions = () => {
  const { missions } = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!missions.length) {
      dispatch(setMission());
    }
  }, []);

  const reserveHandler = (payload) => {
    dispatch(missionReserve(payload));
  };

  console.log(missions);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {(missions.map((mission) => (
            <tr key={mission.id} id={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                {
                mission.reserved
                  ? <span>Active member</span>
                  : <span>NOT A MEMBER</span>
              }

              </td>
              <td>
                {
                mission.reserved
                  ? <button type="button" onClick={() => { reserveHandler(mission.id); }}>Leave Mission</button>
                  : <button type="button" onClick={() => { reserveHandler(mission.id); }}>Join Mission</button>
              }
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
