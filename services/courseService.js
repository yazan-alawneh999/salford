export const createCourseService = api => ({
  getCourses: async () => {
    const res = await api.get('/courses');
    return res.data;
  },

  getCourseById: async id => {
    const res = await api.get(`/courses/${id}`);
    return res.data;
  },

  getCourseDetails: async id => {
    const res = await api.get(`/courses/details/${id}`);
    return res.data;
  },

  getCourseByName: async name => {
    const res = await api.get(
      `/courses/search?name=${encodeURIComponent(name)}`,
    );
    return res.data;
  },

  getTrendingCourses: async () => {
    const res = await api.get('/courses/trending');
    return res.data;
  },

  getPopularCourses: async () => {
    const res = await api.get('/courses/popular');
    return res.data;
  },

  getCoursesWithProgressByUser: async userId => {
    const res = await api.get(`/courses/progress/${userId}`);
    return res.data;
  },
});
