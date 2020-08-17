import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.0.66:3333',
  // baseURL: 'http://servelx.duckdns.org:3333',
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
