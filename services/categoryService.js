export const createCategoryService = api => ({
  getCategories: async () => {
    const res = await api.get('/categories');
    return res.data;
  },

  getCoursesByCategoryId: async categoryId => {
    const res = await api.get(`/courses/category/${categoryId}`);
    return res.data;
  },
});
