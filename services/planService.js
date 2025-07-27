export const createPlanService = api => ({
  getPlans: async () => {
    const res = await api.get('/plans');
    return res.data;
  },
});
