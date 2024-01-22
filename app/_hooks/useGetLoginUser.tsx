import { useState } from 'react';
import apiClient from '../_lib/apiClient';
import { UserType } from '../types/user';

export const useGetLoginUser = () => {
  const [user, setUser] = useState<Omit<UserType, 'posts'> | null>(null);

  const findUser = () => {
    try {
      apiClient.get('/users/find').then((res) => setUser(res.data.user));
    } catch (error) {
      console.log(`ログインユーザーの取得に失敗しました。`);
      console.log(error);
    }
  };

  return { user, setUser, findUser };
};
