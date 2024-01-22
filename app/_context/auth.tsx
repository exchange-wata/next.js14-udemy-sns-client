'use client';
import React, { ReactNode, useContext, useEffect } from 'react';
import { useGetLoginUser } from '../_hooks/useGetLoginUser';
import apiClient from '../_lib/apiClient';
import { UserType } from '../types/user';

interface AuthContextType {
  user: Omit<UserType, 'posts'> | null;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderContext {
  children: ReactNode;
}

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  login: (token: string) => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderContext) => {
  const { user, setUser } = useGetLoginUser();

  const login = (token: string) => {
    localStorage.setItem('auth_token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
    delete apiClient.defaults.headers['Authorization'];
  };

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token && user === null) setUser(user);
  }, [user, setUser]);

  const value = { login, logout, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
