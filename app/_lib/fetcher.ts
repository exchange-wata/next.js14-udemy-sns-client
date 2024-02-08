import apiClient from './apiClient';

export const fetcher = async (url: string) => {
  const res = await apiClient.get(url);
  return res.data;
};
