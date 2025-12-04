import axios from 'axios';
import { API_BASE_URL } from '../config/api';
import { getToken } from '../lib/auth';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers.Authorizaiton = 'Bearer ${token}';
  }

  return config;
});
