import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from './api';
import { tokenService } from './tokenService';

export const useSignUpMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }) =>
      api.post('/api/auth/signup', { email, password }),
    onSuccess: async data => {
      if (data.data?.token) {
        await tokenService.setToken(data.data.token);
      }
      if (data.data?.userId) {
        await tokenService.setUserId(data.data.userId);
      }
      queryClient.invalidateQueries({
        queryKey: ['profile', data.data.userId],
      });
    },
  });
};

export const useSignInMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }) =>
      api.post('/api/auth/signin', { email, password }),
    onSuccess: async data => {
      if (data.data?.token) {
        await tokenService.setToken(data.data.token);
      }
      if (data.data?.userId) {
        await tokenService.setUserId(data.data.userId);
      }
      queryClient.invalidateQueries({
        queryKey: ['profile', data.data.userId],
      });
    },
  });
};
