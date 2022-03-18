/* eslint-disable max-len */
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import rocketHooks from '../../hooks/Rockets';
import Rocket from '../Rocket/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  rocketHooks();
  return (
    <Container>
      {rockets.map(({
        id, description, image, reserved, name,
      }) => (
        <Rocket key={id} id={id} description={description} image={image} reserved={reserved} name={name} />
      ))}
    </Container>
  );
};
export default Rockets;
