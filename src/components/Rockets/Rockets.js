/* eslint-disable max-len */
import { Container } from 'react-bootstrap';
import rocketHooks from '../../hooks/Rockets';
import Rocket from '../Rocket/Rocket';

const Rockets = () => {
  rocketHooks();
  return (
    <Container>
      <Rocket />
    </Container>
  );
};
export default Rockets;
