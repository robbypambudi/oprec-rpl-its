import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL,
  timeout: 10000,
  timeoutErrorMessage: 'Server timeout. Please try again later.',
});
