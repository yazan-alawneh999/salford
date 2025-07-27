import React, { createContext, useContext, useState, useEffect } from 'react';
import { tokenService } from '../services/tokenService';
import {
  signIn as signInApi,
  signOut as signOutApi,
} from '../services/apiService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const token = await tokenService.getToken();
      console.log('AUTH TOKEN TYPE:', typeof token); // should be 'string'
      console.log('AUTH TOKEN VALUE:', token);
      if (token) setAuthToken(token);
      setLoading(false);
    };
    loadToken();
  }, []);

  const signIn = async (email, password) => {
    const res = await signInApi(email, password);
    setAuthToken(res.data.token);
  };

  const signOut = async () => {
    await signOutApi();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
