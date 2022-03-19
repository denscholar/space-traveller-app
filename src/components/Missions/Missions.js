import { useEffect } from 'react';
import {
  Badge, Container, Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './Missions.css';
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

  return (
    <Container>
      <Table
        striped
        bordered
        style={{
          textAlign: 'left',
        }}
      >
        <thead>
          <tr>
            <th><h5>Mission</h5></th>
            <th><h5>Description</h5></th>
            <th><h5>Status</h5></th>
          </tr>
        </thead>
        <tbody style={{ alignItems: 'center' }}>
          {(missions.map((mission) => (
            <tr key={mission.id} id={mission.id}>
              <td><h5>{mission.name}</h5></td>
              <td style={{ width: '90%' }}>{mission.description}</td>
              <td className="align-middle">
                {
                mission.reserved
                  ? <Badge bg="info">Active member</Badge>
                  : <Badge bg="secondary">NOT A MEMBER</Badge>
              }

              </td>
              <td className="align-middle">
                {
                mission.reserved
                  ? <button label="Leave Mission" type="button" id="missionLeave" style={{ width: '10vw' }} onClick={() => { reserveHandler(mission.id); }} className="missionbtn btn btn-outline-danger bg-light">Leave Mission</button>
                  : <button label="Join Mission" type="button" id="missionoin" style={{ width: '10vw' }} onClick={() => { reserveHandler(mission.id); }} className="missionbtn btn btn-outline-secondary bg-light">Join Mission</button>
            }
              </td>
            </tr>
          )))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Missions;
