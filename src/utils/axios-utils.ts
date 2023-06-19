import axios, { AxiosInstance } from 'axios';
import logger from './logger';

const api: AxiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  withCredentials: false,
});

api.interceptors.response.use(
  (response) => {
    logger.info('API Response:', response.data);
    return response;
  },
  (error) => {
    logger.error('API Error:', error);
    throw error;
  }
);

export default api;
