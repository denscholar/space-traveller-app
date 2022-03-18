import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { reserveRocketAction, cancelRocketAction } from '../../Redux/Rockets/Rockets';

const Rocket = ({
  id, name, description, image, reserved,
}) => (
  <Row key={id} style={{ textAlign: 'left', marginButtom: '15px' }}>
    <Col sm={4}>
      <img style={{ width: '100%', marginBottom: '15px' }} src={image} alt={name} />
    </Col>
    <Col sm={8} style={{ marginButtom: '15px' }}>
      <h4>{name}</h4>
      <p>
        {reserved && (<Badge style={{ marginRight: '10px' }} bg="warning" text="dark">Reserved</Badge>)}
        {description}
      </p>
      {!reserved && (
        <Button text="Reserve Rocket" click={() => reserveRocketAction(id)} id={id} buttonClass="btn btn-primary" />
      )}
      {reserved && (
        <Button text="Cancel Rerservation" click={() => cancelRocketAction(id)} id={id} buttonClass="btn btn-outline-secondary" />
      )}
    </Col>
  </Row>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
