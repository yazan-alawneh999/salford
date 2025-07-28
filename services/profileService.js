export const createProfileService = api => ({
  getProfile: async userId => {
    const res = await api.get(`api/profiles/${userId}`);
    return res.data;
  },
});
