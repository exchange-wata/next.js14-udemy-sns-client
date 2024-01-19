'use client';
import { useAuth } from '@/app/_context/auth';
import apiClient from '@/app/_lib/apiClient';
import { PostType } from '@/app/types/post';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Timeline = () => {
  const [postText, setPostText] = useState<string>('');
  const [latestPosts, setLatestPosts] = useState<PostType[]>();

  // FIXME: 仮実装なのでなんとかしたい
  const { login } = useAuth();
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('auth_token');
    if (!token) return;
    login(token);
  }

  const getPost = async () => {
    // つぶやきの取得
    try {
      const posts = await apiClient.get('/posts/get', {});
      setLatestPosts(posts?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // つぶやきの投稿
    try {
      // TODO: authorIdをpostデータに含める
      const latestPost = await apiClient.post('/posts/post', {
        content: postText,
      });

      setLatestPosts((prevPostsData) => [latestPost.data, prevPostsData]);

      setPostText('');
    } catch (error) {
      alert('ログインしてください');
    }
  };

  useEffect(() => {
    const fetchLatestPosts = async () => {
      await getPost();
    };
    fetchLatestPosts();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100'>
      <main className='container mx-auto py-4'>
        <div className='bg-white shadow-md rounded p-4 mb-4'>
          <form onSubmit={handleSubmit}>
            <textarea
              className='w-full h-24 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setPostText(e.target.value)
              }
            ></textarea>
            <button
              type='submit'
              className='mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded'
            >
              投稿
            </button>
          </form>
        </div>
        {latestPosts?.map((post: PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
};

export default Timeline;
