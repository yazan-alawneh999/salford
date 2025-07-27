import api from './api';
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
