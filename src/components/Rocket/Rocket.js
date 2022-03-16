/* eslint-disable arrow-body-style */
import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import { reserveRocketAction } from '../../Redux/Rockets/Rockets';

const Rocket = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const renderedRockets = rockets.map((rocket) => {
    const {
      id, reserved, description, name, image,
    } = rocket;
    return (
      <Row key={id} style={{ textAlign: 'left', marginButtom: '15px' }}>
        <Col sm={4}>
          <img style={{ width: '100%', marginBottom: '15px' }} src={image} alt={name} />
        </Col>
        <Col sm={8} style={{ marginButtom: '15px' }}>
          <h4>{name}</h4>
          <p>
            {reserved && (<Badge text={reserved} />)}
            {description}
          </p>
          {!reserved && (
          <Button text="Reserve Rocket" click={() => reserveRocketAction(id)} id={id} buttonClass="btn btn-primary" />
          )}
          {reserved && (
          <Button text="Cancel Rerservation" click={() => reserveRocketAction(id)} id={id} buttonClass="btn btn-outline-secondary" />
          )}
        </Col>
      </Row>
    );
  });
  return (
    <>
      {renderedRockets}
    </>
  );
};

export default Rocket;
