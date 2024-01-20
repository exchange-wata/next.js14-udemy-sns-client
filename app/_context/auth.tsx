'use client';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
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
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderContext) => {
  const [user, setUser] = useState<Omit<UserType, 'posts'> | null>(null);

  const login = (token: string) => {
    localStorage.setItem('auth_token', token);

    // FIXME: 重複記述があるのでなんとかする
    apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
    try {
      apiClient
        .get('/users/find')
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
    delete apiClient.defaults.headers['Authorization'];
  };

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // FIXME: 重複記述があるのでなんとかする
      apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;
      apiClient
        .get('/users/find')
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const value = { login, logout, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
