import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
  const response = await axios.get(rocketsUrl);
  const { data } = response;
  const rockets = [];

  data.map((rocket) => rockets.push({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
  return rockets;
};

export default getRockets;
