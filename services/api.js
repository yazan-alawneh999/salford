// api.js
import axios from 'axios';
import { tokenService } from './tokenService';

const API_BASE_URL = 'https://482791a04b7b.ngrok-free.app';
export const IMAGE_BASE_URL = `${API_BASE_URL}/images`;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// ✅ Attach token from AsyncStorage before every request
api.interceptors.request.use(
  async config => {
    const token = await tokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Optional: Global error logger
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error?.response?.data || error.message);

    return Promise.reject(error);
  },
);

export default api;
