import { UserType } from './user';

export interface ProfileType {
  id: number;
  bio: string;
  imageUrl: string;
  userId: number;
  user: UserType;
}
