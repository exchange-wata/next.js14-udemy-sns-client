import { useEffect, useState } from 'react';
import apiClient from '../_lib/apiClient';
import { UserType } from '../types/user';

export const useGetLoginUser = () => {
  const [user, setUser] = useState<Omit<UserType, 'posts'> | null>(null);

  const findUser = async () => {
    try {
      await apiClient.get('/users/find').then((res) => {
        setUser(res.data.user);
      });
    } catch (error) {
      console.log(`ログインユーザーの取得に失敗しました。`);
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    apiClient.defaults.headers['Authorization'] = `Bearer ${token}`;

    if (token && user === null) findUser();
  }, [user, setUser]);
  console.log(`user_hook: ${user}`);

  return { user, setUser };
};
