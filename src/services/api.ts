import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.0.66:3333',
  // baseURL: 'http://servelx.duckdns.org:3333',
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.baseURL = process.env.REACT_APP_API_URL;

api.get('/user?ID=12345').then(function (response) {
  // handle success
  console.log(response);
});

export default api;
