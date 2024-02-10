import apiClient from './apiClient';

export const fetcher = async <T>(url: string): Promise<T | null> => {
  const res = await apiClient.get(url);
  return res.data;
};
