'use client';
import { useUserProfile } from '@/app/profile/[userId]/_hooks/useUserProfile';
import { PostType } from '@/app/types/post';
import { notFound } from 'next/navigation';
import { useUserPosts } from './_hooks/useUserPosts';

const UserProfile = ({ params }: { params: { userId: string } }) => {
  // TODO: ローディングとか入れたい
  const { profile, error: gettingProfileError } = useUserProfile(params.userId);
  if (gettingProfileError) notFound();

  const { posts, error: gettingPostsError } = useUserPosts(params.userId);
  if (gettingPostsError) notFound();

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
        {posts?.map((post: PostType) => (
          <div className='bg-white shadow-md rounded p-4 mb-4' key={post.id}>
            <div className='mb-4'>
              <div className='flex items-center mb-2'>
                <img
                  className='w-10 h-10 rounded-full mr-2'
                  alt='User Avatar'
                  src={profile?.imageUrl}
                />
                <div>
                  <h2 className='font-semibold text-md'>{post.author.name}</h2>
                  <p className='text-gray-500 text-sm'>{post.createdAt}</p>
                </div>
              </div>
              <p className='text-gray-700'>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
