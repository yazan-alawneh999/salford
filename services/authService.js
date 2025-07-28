import api from './api';
import { tokenService } from './tokenService';

export const signUp = async ({ email, password }) => {
  const res = await api.post('/api/auth/signup', { email, password });
  console.log('SIGNIN RESPONSE:', res.data);
  console.log(`token ${res.data.token}`);
  console.log(`userId ${res.data.userId}`);
  await tokenService.setToken(res.data.token);
  await tokenService.setUserId(res.data.userId);
  return res.data;
};

export const signIn = async ({ email, password }) => {
  const res = await api.post('/api/auth/signin', { email, password });
  console.log('SIGNIN RESPONSE:', res.data);
  console.log(`token ${res.data.token}`);
  console.log(`userId ${res.data.userId}`);
  await tokenService.setToken(res.data.token);
  await tokenService.setUserId(res.data.userId);
  return res.data;
};
