import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tokenService } from '../../services/tokenService';

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  const token = await tokenService.getToken();
  const userId = await tokenService.getUserId();
  console.log(`userId : ${userId}`);
  return { token, userId };
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    userId: null,
    loading: true,
  },
  reducers: {
    logout: state => {
      tokenService.clearToken();
      state.isAuthenticated = false;
      state.token = null;
      state.userId = null;
    },
    loginSuccess: (state, action) => {
      const { token, userId } = action.payload;
      state.token = token;
      state.userId = userId;
      state.isAuthenticated = true;
      tokenService.setToken(token);
      tokenService.setUserId(userId);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(checkAuth.pending, state => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        const { token, userId } = action.payload || {};
        state.loading = false;
        state.token = token || null;
        state.userId = userId || null;
        state.isAuthenticated = !!token;
      })
      .addCase(checkAuth.rejected, state => {
        state.loading = false;
        state.isAuthenticated = false;
        state.token = null;
        state.userId = null;
      });
  },
});

export const { logout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
