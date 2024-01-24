import { PostType } from '@/app/types/post';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <div className='bg-white shadow-md rounded p-4 mb-4'>
      <div className='mb-4'>
        <div className='flex items-center mb-2'>
          {/* TODO: next/imageに変更したい */}
          <img
            className='w-10 h-10 rounded-full mr-2'
            src={post.author.profile?.imageUrl}
            alt='User Avatar'
          />
          <div>
            <h2 className='font-semibold text-md'>{post.author?.name}</h2>
            <p className='text-gray-500 text-sm'>
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <p className='text-gray-700'>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
