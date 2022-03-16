import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocketsAction } from '../Redux/Rockets/Rockets';

const rocketHooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsAction());
  }, []);
};

export default rocketHooks;
