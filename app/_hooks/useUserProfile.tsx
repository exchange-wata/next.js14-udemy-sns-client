import { useState } from 'react';
import apiClient from '../_lib/apiClient';
import { ProfileType } from '../types/profile';

export const useUserProfile = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  const getUserProfile = async (userId: number) => {
    if (!userId) return;
    try {
      await apiClient
        .get(`/profile/find/${userId}`)
        .then((res) => setProfile(res.data.profile));
    } catch (error) {
      console.log(error);
    }
  };

  return { profile, setProfile, getUserProfile };
};
