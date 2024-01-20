'use client';
import React, { ReactNode, useContext, useEffect } from 'react';
import apiClient from '../_lib/apiClient';

interface AuthContextType {
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderContext {
  children: ReactNode;
}

const AuthContext = React.createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderContext) => {
  const login = (token: string) => localStorage.setItem('auth_token', token);
  const logout = () => localStorage.removeItem('auth_token');
  const value = { login, logout };

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
