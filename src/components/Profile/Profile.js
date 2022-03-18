import {
  Table, Container, Col, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Profile = (props) => {
  const missionList = useSelector((state) => state.missionReducer.missions);
  const reservedMissions = missionList.filter((mission) => mission.reserved);
  const { rockets } = props;
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <Container>
      <Row>
        <Col>
          <h2>My Missions</h2>
          <Table bordered>
            <tbody>
              {reservedMissions.map((mission) => (
                <tr key={mission.id}>
                  <td>
                    {mission.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2>My Rockets</h2>
          <Table bordered>
            <tbody>
              {activeRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    {rocket.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Profile;
