import { useEffect, useState } from 'react';
import apiClient from '../../../_lib/apiClient';
import { ProfileType } from '../../../types/profile';

export const useUserProfile = (userId: string) => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const getUserProfile = async (userId: string) => {
      if (!userId) return;
      try {
        const res = await apiClient.get(`/profile/find/${userId}`);

        if (!res.data.profile)
          throw new Error(`Profile not found, that userId is ${userId}`);

        setProfile(res.data.profile);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    if (profile === null) getUserProfile(userId);
  }, []);

  return { profile, error };
};
