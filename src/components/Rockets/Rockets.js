/* eslint-disable max-len */
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRocketsAction } from '../../Redux/Rockets/Rockets';
import Rocket from '../Rocket/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketsAction());
    }
  }, []);

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
