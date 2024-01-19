import { PostType } from './post';

export interface UserType {
  id: number;
  name: string;
  email: string;
  posts: PostType[];
}
