import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMission } from '../../Redux/Missions/MissionReducer';

const Missions = () => {
  const { missions } = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (!missions.length) {
      await dispatch(setMission());
    }
  }, []);

  const arrayCheck = () => {
    console.log(missions);
    if (missions.length > 0) {
      return (missions.map((mission) => (
        <tr key={mission.id} id={mission.id}>
          <td>{mission.name}</td>
          <td>{mission.description}</td>
          <td><span>NOT A MEMBER</span></td>
          <td><button type="button">Join Mission</button></td>
        </tr>
      )));
    }
    return <tr><td>error</td></tr>;
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
          {arrayCheck()}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
