import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './api';
import { tokenService } from './tokenService';

// AUTH
export const useSignUpMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ email, password }) => api.post('/api/auth/signup', { email, password }),
    {
      onSuccess: async data => {
        if (data.data?.token) {
          await tokenService.setToken(data.data.token);
        }
        if (data.data?.userId) {
          await tokenService.setUserId(data.data.userId);
        }
        queryClient.invalidateQueries(['profile', data.data.userId]);
      },
    },
  );
};

export const useSignInMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ email, password }) => api.post('/api/auth/signin', { email, password }),
    {
      onSuccess: async data => {
        if (data.data?.token) {
          await tokenService.setToken(data.data.token);
        }
        if (data.data?.userId) {
          await tokenService.setUserId(data.data.userId);
        }
        queryClient.invalidateQueries(['profile', data.data.userId]);
      },
    },
  );
};

export const useSignOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      await tokenService.clearToken();
    },
    {
      onSuccess: () => {
        queryClient.clear();
      },
    },
  );
};

// Courses
export const useCoursesQuery = () =>
  useQuery(['courses'], async () => {
    const res = await api.get('/courses');
    return res.data;
  });

export const useCourseByIdQuery = id =>
  useQuery(
    ['course', id],
    async () => {
      const res = await api.get(`/courses/${id}`);
      return res.data;
    },
    { enabled: !!id },
  );

export const useCourseDetailsQuery = id =>
  useQuery(
    ['courseDetails', id],
    async () => {
      const res = await api.get(`/courses/details/${id}`);
      return res.data;
    },
    { enabled: !!id },
  );

export const useCourseByNameQuery = name =>
  useQuery(
    ['courses', { name }],
    async () => {
      const res = await api.get(
        `/courses/search?name=${encodeURIComponent(name)}`,
      );
      return res.data;
    },
    { enabled: !!name },
  );

export const useTrendingCoursesQuery = () =>
  useQuery(['trendingCourses'], async () => {
    const res = await api.get('/courses/trending');
    return res.data;
  });

export const usePopularCoursesQuery = () =>
  useQuery(['popularCourses'], async () => {
    const res = await api.get('/courses/popular');
    return res.data;
  });

export const useCoursesWithProgressByUserQuery = userId =>
  useQuery(
    ['coursesWithProgress', userId],
    async () => {
      const res = await api.get(`/courses/progress/${userId}`);
      return res.data;
    },
    { enabled: !!userId },
  );

// Plans
export const usePlansQuery = () =>
  useQuery(['plans'], async () => {
    const res = await api.get('/plans');
    return res.data;
  });

export const useSubscribePlanMutation = () => {
  return useMutation(({ planId, userId }) =>
    api.post('/subscriptions/create', { planId, userId }),
  );
};

export const useSubscriptionsQuery = () =>
  useQuery(['subscriptions'], async () => {
    const res = await api.get('/subscriptions');
    return res.data;
  });

// Categories
export const useCategoriesQuery = () =>
  useQuery(['categories'], async () => {
    const res = await api.get('/categories');
    return res.data;
  });

export const useCoursesByCategoryIdQuery = categoryId =>
  useQuery(
    ['coursesByCategory', categoryId],
    async () => {
      const res = await api.get(`courses/category/${categoryId}`);
      return res.data;
    },
    { enabled: !!categoryId },
  );

export const useSubjectDetailsQuery = subjectId =>
  useQuery(
    ['subjectDetails', subjectId],
    async () => {
      const res = await api.get(`courses/subject/${subjectId}`);
      return res.data;
    },
    { enabled: !!subjectId },
  );

export const useProfileQuery = () =>
  useQuery(
    ['profile'],
    async () => {
      const userId = await tokenService.getUserId();
      if (!userId) {
        throw new Error('User not authenticated');
      }
      const res = await api.get(`/api/profiles/${userId}`);
      return res.data;
    },
    {
      enabled: !!tokenService.getUserId(),
    },
  );

export const useCurrentCoursesQuery = () =>
  useQuery(
    ['currentCourses'],
    async () => {
      const userId = await tokenService.getUserId();
      if (!userId) {
        throw new Error('User not authenticated');
      }
      const res = await api.get(`/courses/progress/${userId}`);
      return res.data;
    },
    {
      enabled: !!tokenService.getUserId(),
    },
  );
