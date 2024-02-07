import apiClient from '@/app/_lib/apiClient';
import { PostType } from '@/app/types/post';
import { useEffect, useState } from 'react';

export const useUserPosts = (userId: number) => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const getUserPosts = async (userId: number) => {
      if (!userId) return;

      try {
        const res = await apiClient.get(`posts/get/${userId}`);

        console.log(...res.data.posts);
        if (!res.data.posts)
          throw new Error(`Posts not found, that user ID is ${userId}`);

        setPosts(res.data.posts);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    getUserPosts(userId);
  }, [posts, error]);

  return { posts, error };
};
