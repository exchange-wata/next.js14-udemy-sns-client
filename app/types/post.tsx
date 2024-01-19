import { UserType } from './user';

export interface PostType {
  id: number;
  content: string;
  createdAt: string;
  user: UserType;
}
