import { fetcher } from '@/app/_lib/fetcher';
import { ProfileType } from '@/app/types/profile';
import useSWR from 'swr';

export const useUserProfile = (userId: string) => {
  const { data, error, isLoading } = useSWR<ProfileType | null>(
    `/profile/find/${userId}`,
    fetcher
  );

  return {
    profile: data,
    gettingProfileError: error,
    isProfileLoading: isLoading,
  };
};
