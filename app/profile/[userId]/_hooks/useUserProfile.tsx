import { fetcher } from '@/app/_lib/fetcher';
import { ProfileType } from '@/app/types/profile';
import useSWR from 'swr';

export const useUserProfile = (userId: string) => {
  const { data, error, isLoading } = useSWR<ProfileType | null>(
    `/profile/find/${userId}`,
    fetcher<ProfileType>,
    { suspense: true }
  );

  return {
    profile: !!data ? data : null,
    gettingProfileError: error,
    isProfileLoading: isLoading,
  };
};
