import { UserModel } from '@/models';

export interface MyAvatarProps {
  onChangeAvatar(): void;
  user: UserModel;
}
