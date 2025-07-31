import api from './api';
import { tokenService } from './tokenService';

const cache = new Map();

const cachedRequest = async (key, request) => {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const response = await request();
  cache.set(key, response);
  return response;
};

// AUTH
export const signUp = async (email, password) => {
  try {
    const res = await api.post('/api/auth/signup', { email, password });

    // Save token
    if (res.data?.token) {
      await tokenService.setToken(res.data.token);
    }
    if (res.data?.userId) {
      await tokenService.setUserId(res.data.userId);
    }

    return res.data;
  } catch (error) {
    console.error('Sign Up Error:', error.response?.data || error.message);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const res = await api.post('/api/auth/signin', { email, password });

    console.log('SIGNIN RESPONSE:', res.data);

    if (res.data?.token) {
      await tokenService.setToken(res.data.token);
    }

    if (res.data?.userId) {
      await tokenService.setUserId(res.data.userId);
      console.log(`id = ${res.data.userId}`);
    }

    return res.data;
  } catch (error) {
    console.error('Sign In Error:', error.response?.data || error.message);
    throw error;
  }
};

export const signOut = async () => {
  await tokenService.clearToken();
  cache.clear();
};
// Courses
export const getCourses = () =>
  cachedRequest('courses', async () => {
    const res = await api.get('/courses');
    return res.data;
  });

export const getCourseById = id =>
  cachedRequest(`course_${id}`, async () => {
    const res = await api.get(`/courses/${id}`);
    return res.data;
  });

export const getCourseDetails = id =>
  cachedRequest(`course_details_${id}`, async () => {
    const res = await api.get(`/courses/details/${id}`);
    console.log(res.data);
    return res.data;
  });

export const getCourseByName = async name => {
  const res = await api.get(`/courses/search?name=${encodeURIComponent(name)}`);
  return res.data;
};

export const getTrendingCourses = () =>
  cachedRequest('trending_courses', async () => {
    const res = await api.get('/courses/trending');
    return res.data;
  });

export const getPopularCourses = () =>
  cachedRequest('popular_courses', async () => {
    const res = await api.get('/courses/popular');
    return res.data;
  });

export const getCoursesWithProgressByUser = userId =>
  cachedRequest(`courses_progress_${userId}`, async () => {
    const res = await api.get(`/courses/progress/${userId}`);
    return res.data;
  });

// Plans
export const getPlans = () =>
  cachedRequest('plans', async () => {
    const res = await api.get('/plans');
    return res.data;
  });

export const subscribePlan = async (planId, userId) => {
  const res = await api.post('/subscriptions/create', { planId, userId });
  return res.data;
};
export const getSubscriptions = async () => {
  const res = await api.get('/subscriptions');
  return res.data;
};

// Categories
export const getCategories = () =>
  cachedRequest('categories', async () => {
    const res = await api.get('/categories');
    return res.data;
  });

export const getCoursesByCategoryId = categoryId =>
  cachedRequest(`courses_by_category_${categoryId}`, async () => {
    const res = await api.get(`courses/category/${categoryId}`);
    return res.data;
  });
export const getSubjectDetails = subjectId =>
  cachedRequest(`subject_details_${subjectId}`, async () => {
    const res = await api.get(`courses/subject/${subjectId}`);
    return res.data;
  });

export const getProfile = async () => {
  try {
    const userId = await tokenService.getUserId();
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return cachedRequest(`profile_${userId}`, async () => {
      const res = await api.get(`/api/profiles/${userId}`);
      console.log('Profile data:', res.data);
      return res.data;
    });
  } catch (error) {
    console.error('Get Profile Error:', error.response?.data || error.message);
    throw error;
  }
};

export const getCurrentCourses = async () => {
  try {
    const userId = await tokenService.getUserId();
    if (!userId) {
      throw new Error('User not authenticated');
    }
    return cachedRequest(`current_courses_${userId}`, async () => {
      const res = await api.get(`/courses/progress/${userId}`);
      console.log('Currenct courses data:', res.data);
      return res.data;
    });
  } catch (error) {
    console.error(
      'Get Current Courses Error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};
