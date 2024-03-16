import axios from 'axios';
import {URL} from './url';

export const axiosClient = axios.create();
axiosClient.defaults.baseURL = URL.BASE_URL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
