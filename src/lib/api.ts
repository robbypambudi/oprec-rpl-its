import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL,
  timeout: 10000,
  timeoutErrorMessage: 'Server timeout. Please try again later.',
});
