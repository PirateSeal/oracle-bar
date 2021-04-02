import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.APP_API_URL}/`,
    timeout: 50000,
    headers: {}
  });

export default instance;