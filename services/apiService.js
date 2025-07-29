import api from './api';
import { tokenService } from './tokenService';
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
};
// Courses
export const getCourses = async () => {
  const res = await api.get('/courses');
  return res.data;
};

export const getCourseById = async id => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};

export const getCourseDetails = async id => {
  const res = await api.get(`/courses/details/${id}`);
  console.log(res.data);
  return res.data;
};

export const getCourseByName = async name => {
  const res = await api.get(`/courses/search?name=${encodeURIComponent(name)}`);
  return res.data;
};

export const getTrendingCourses = async () => {
  const res = await api.get('/courses/trending');
  return res.data;
};

export const getPopularCourses = async () => {
  const res = await api.get('/courses/popular');
  return res.data;
};

export const getCoursesWithProgressByUser = async userId => {
  const res = await api.get(`/courses/progress/${userId}`);
  return res.data;
};

// Plans
export const getPlans = async () => {
  const res = await api.get('/plans');
  return res.data;
};

export const subscribePlan = async (planId, userId) => {
  const res = await api.post('/subscriptions/create', { planId, userId });
  return res.data;
};
export const getSubscriptions = async () => {
  const res = await api.post('/subscriptions');
  return res.data;
};

// Categories
export const getCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
};

export const getCoursesByCategoryId = async categoryId => {
  const res = await api.get(`courses/category/${categoryId}`);
  return res.data;
};

export const getProfile = async () => {
  try {
    const userId = await tokenService.getUserId();
    if (!userId) {
      throw new Error('User not authenticated');
    }
    const res = await api.get(`/api/profiles/${userId}`);
    console.log('Profile data:', res.data);
    return res.data;
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
    const res = await api.get(`/courses/progress/${userId}`);
    console.log('Currenct courses data:', res.data);
    return res.data;
  } catch (error) {
    console.error(
      'Get Current Courses Error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};
