import React, { createContext, useContext, useState, useEffect } from 'react';
import { tokenService } from '../services/tokenService';
import {
  signIn as signInApi,
  signOut as signOutApi,
} from '../services/apiService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      const token = await tokenService.getToken();
      if (token) {
        setAuthToken(token);
      }
    };
    loadToken();
  }, []);

  const signIn = async (email, password) => {
    const res = await signInApi(email, password);
    setAuthToken(res.token);
  };

  const signOut = async () => {
    await signOutApi();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
