import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile } from '../../services/apiService';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    console.log('Fetching profile...');
    const response = await getProfile();
    return response;
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.loading = true;
        state.error = null;
        console.log('Profile fetching pending...');
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        console.log('Profile fetching fulfilled:', action.payload);
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error('Profile fetching rejected:', action.error.message);
      });
  },
});

export default profileSlice.reducer;
