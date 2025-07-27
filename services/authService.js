import api from './api';
import { tokenService } from './tokenService';

export const signUp = async ({ email, password }) => {
  const res = await api.post('/api/auth/signup', { email, password });
  await tokenService.setToken(res.data.token);
  return res.data;
};

export const signIn = async ({ email, password }) => {
  const res = await api.post('/api/auth/signin', { email, password });
  console.log(`token ${res.data.token}`);
  await tokenService.setToken(res.data.token);
  return res.data;
};
