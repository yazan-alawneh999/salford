
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tokenService } from '../../services/tokenService';

// Thunk to check if user is authenticated
export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  const token = await tokenService.getToken();
  return token;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    loading: true,
  },
  reducers: {
    logout: state => {
      tokenService.clearToken();
      state.isAuthenticated = false;
      state.token = null;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      tokenService.setToken(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(checkAuth.pending, state => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.isAuthenticated = !!action.payload;
      })
      .addCase(checkAuth.rejected, state => {
        state.loading = false;
        state.isAuthenticated = false;
        state.token = null;
      });
  },
});

export const { logout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
