// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL = 'http://192.168.254.100';

export default axios.create({
  baseURL,
});
