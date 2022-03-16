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
              <td className="mission_name">{mission.name}</td>
              <td className="description">{mission.description}</td>
              <td className="member_cnt" />
              <td className="btn_ctn">
                {
                mission.reserved
                  ? <button type="button" className="cancel_btn" onClick={() => { reserveHandler(mission.id); }}>Leave Mission</button>
                  : <button type="button" className="reserve_btn" onClick={() => { reserveHandler(mission.id); }}>Join Mission</button>
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
