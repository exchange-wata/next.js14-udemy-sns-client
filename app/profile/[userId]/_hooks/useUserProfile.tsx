import { useEffect, useState } from 'react';
import apiClient from '../../../_lib/apiClient';
import { ProfileType } from '../../../types/profile';

export const useUserProfile = (userId: number) => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const getUserProfile = async (userId: number) => {
      if (!userId) return;
      try {
        const res = await apiClient.get(`/profile/find/${userId}`);

        if (!res.data.profile)
          throw new Error(`Profile not found for userId is ${userId}`);

        setProfile(res.data.profile);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    getUserProfile(userId);
  }, [profile, userId]);

  return { profile, error };
};
