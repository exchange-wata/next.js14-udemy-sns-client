import { fetcher } from '@/app/_lib/fetcher';
import { ProfileType } from '@/app/types/profile';
import useSWR from 'swr';

export const useUserProfile = (userId: string) => {
  const { data, error, isLoading } = useSWR(
    `/profile/find/${userId}`,
    fetcher<ProfileType>,
    { suspense: true }
  );

  return {
    profile: data,
    gettingProfileError: error,
    isProfileLoading: isLoading,
  };
};
