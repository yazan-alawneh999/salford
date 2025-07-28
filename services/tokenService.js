// tokenService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'jwt_token';
const USERID_KEY = 'user_id';

export const tokenService = {
  setToken: async token => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (error) {
      console.error('Failed to save token:', error);
    }
  },

  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      console.log('TOKEN TYPE:', typeof token); // should be 'string'
      console.log('TOKEN VALUE:', token);
      return token;
    } catch (error) {
      console.error('Failed to get token:', error);
      return null;
    }
  },
  setUserId: async userId => {
    try {
      await AsyncStorage.setItem(USERID_KEY, String(userId));
    } catch (error) {
      console.error('Faild to save userId ', error);
    }
  },
  getUserId: async () => {
    try {
      const userId = await AsyncStorage.getItem(USERID_KEY);
      const parsedId = userId ? parseInt(userId, 10) : null;
      console.log('TOKEN userId:', parsedId);
      return parsedId;
    } catch (error) {
      console.error('Failed to get userId:', error);
      return null;
    }
  },

  clearToken: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      console.error('Failed to clear token:', error);
    }
  },
};
