import { useEffect } from 'react';
import {
  Badge, Container, Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
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

  console.log(missions);
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
              <td>
                {
                mission.reserved
                  ? <h5><Badge bg="info">Active member</Badge></h5>
                  : <h5><Badge bg="secondary">NOT A MEMBER</Badge></h5>
              }

              </td>
              <td>
                {
                mission.reserved
                  ? <Button style={{ width: '10vw' }} text="Leave Mission" click={() => { reserveHandler(mission.id); }} buttonClass="btn btn-outline-danger bg-light" />
                  : <Button style={{ width: '10vw' }} text="Join Mission" click={() => { reserveHandler(mission.id); }} buttonClass="btn btn-outline-secondary bg-light" />
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
