'use client';
import { useUserProfile } from '@/app/_hooks/useUserProfile';
import { useEffect, useState } from 'react';

const UserProfile = ({ params }: { params: { userId: number } }) => {
  const [userId, setUserId] = useState<number | null>(null);

  const { profile, getUserProfile } = useUserProfile();

  useEffect(() => {
    const requestedUserId = params.userId;
    if (requestedUserId) {
      setUserId(requestedUserId);
      getUserProfile(requestedUserId);
    }
  }, [userId, setUserId]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='w-full max-w-xl mx-auto'>
        <div className='bg-white shadow-md rounded-lg p-6 mb-4'>
          <div className='flex items-center'>
            {/* TODO: next/imageに変更したい */}
            <img
              className='w-20 h-20 rounded-full mr-4'
              alt='User Avatar'
              src={profile?.imageUrl}
            />
            <div>
              <h2 className='text-2xl font-semibold mb-1'>
                {profile?.user.name}
              </h2>
              <p className='text-gray-600'>{profile?.bio}</p>
            </div>
          </div>
        </div>
        {/* TODO: プロフィール画面に表示されているユーザーのpostだけを表示する */}
        {/* <div className='bg-white shadow-md rounded p-4 mb-4' key={post.id}>
          <div className='mb-4'>
            <div className='flex items-center mb-2'>
              <img className='w-10 h-10 rounded-full mr-2' alt='User Avatar' />
              <div>
                <h2 className='font-semibold text-md'>shincode</h2>
                <p className='text-gray-500 text-sm'>2023/05/08</p>
              </div>
            </div>
            <p className='text-gray-700'>はじめての投稿です。</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserProfile;
