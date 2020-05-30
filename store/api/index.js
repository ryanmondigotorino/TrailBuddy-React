// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const baseURL = 'http://eatsph-api.forge99.com';

export default axios.create({
  baseURL,
});
