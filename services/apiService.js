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

    return res.data;
  } catch (error) {
    console.error('Sign Up Error:', error.response?.data || error.message);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const res = await api.post('/api/auth/signin', { email, password });

    // Save token
    if (res.data?.token) {
      await tokenService.setToken(res.data.token);
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

// Categories
export const getCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
};

export const getCoursesByCategoryId = async categoryId => {
  const res = await api.get(`courses/category/${categoryId}`);
  return res.data;
};
