import { PostType } from './post';
import { ProfileType } from './profile';

export interface UserType {
  id: number;
  name: string;
  email: string;
  posts: PostType[];
  profile: ProfileType;
}
