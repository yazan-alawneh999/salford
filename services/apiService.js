import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './api';
import { tokenService } from './tokenService';

// AUTH
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

export const useSignOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await tokenService.clearToken();
    },
    onSuccess: () => {
      queryClient.clear();
    },
  });
};

// Courses
export const useCoursesQuery = () =>
  useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const res = await api.get('/courses');
      return res.data;
    },
  });

export const useCourseByIdQuery = id =>
  useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await api.get(`/courses/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

export const useCourseDetailsQuery = id =>
  useQuery({
    queryKey: ['courseDetails', id],
    queryFn: async () => {
      const res = await api.get(`/courses/details/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

export const useCourseByNameQuery = name =>
  useQuery({
    queryKey: ['courses', { name }],
    queryFn: async () => {
      const res = await api.get(
        `/courses/search?name=${encodeURIComponent(name)}`,
      );
      return res.data;
    },
    enabled: !!name,
  });

export const useTrendingCoursesQuery = () =>
  useQuery({
    queryKey: ['trendingCourses'],
    queryFn: async () => {
      const res = await api.get('/courses/trending');
      return res.data;
    },
  });

export const usePopularCoursesQuery = () =>
  useQuery({
    queryKey: ['popularCourses'],
    queryFn: async () => {
      const res = await api.get('/courses/popular');
      return res.data;
    },
  });

export const useCoursesWithProgressByUserQuery = userId =>
  useQuery({
    queryKey: ['coursesWithProgress', userId],
    queryFn: async () => {
      const res = await api.get(`/courses/progress/${userId}`);
      return res.data;
    },
    enabled: !!userId,
  });

// Plans
export const usePlansQuery = () =>
  useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const res = await api.get('/plans');
      return res.data;
    },
  });

export const useSubscribePlanMutation = () => {
  return useMutation({
    mutationFn: ({ planId, userId }) =>
      api.post('/subscriptions/create', { planId, userId }),
  });
};

export const useSubscriptionsQuery = () =>
  useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const res = await api.get('/subscriptions');
      return res.data;
    },
  });

// Categories
export const useCategoriesQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await api.get('/categories');
      return res.data;
    },
  });

export const usePopularCoursesByCategoryIdQuery = categoryId =>
  useQuery({
    queryKey: ['coursesByCategory', categoryId],
    queryFn: async () => {
      const res = await api.get(`courses/popular/${categoryId}`);
      return res.data;
    },
    enabled: !!categoryId,
  });
export const useTrendingCoursesByCategoryIdQuery = categoryId =>
  useQuery({
    queryKey: ['coursesByCategory', categoryId],
    queryFn: async () => {
      const res = await api.get(`courses/trending/${categoryId}`);
      return res.data;
    },
    enabled: !!categoryId,
  });

export const useSubjectDetailsQuery = subjectId =>
  useQuery({
    queryKey: ['subjectDetails', subjectId],
    queryFn: async () => {
      const res = await api.get(`courses/subject/${subjectId}`);
      return res.data;
    },
    enabled: !!subjectId,
  });

export const useProfileQuery = () =>
  useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const userId = await tokenService.getUserId();
      if (!userId) {
        throw new Error('User not authenticated');
      }
      const res = await api.get(`/api/profiles/${userId}`);
      return res.data;
    },
    enabled: !!tokenService.getUserId(),
  });

export const useCurrentCoursesQuery = () =>
  useQuery({
    queryKey: ['currentCourses'],
    queryFn: async () => {
      const userId = await tokenService.getUserId();
      if (!userId) {
        throw new Error('User not authenticated');
      }
      const res = await api.get(`/courses/progress/${userId}`);
      return res.data;
    },

    enabled: !!tokenService.getUserId(),
  });
