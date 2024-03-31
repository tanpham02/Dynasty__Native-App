import { UserModel } from '@/models';
import { UseFormHandleSubmit } from 'react-hook-form';

export interface FooterBarContentProps {
  handleSubmit: UseFormHandleSubmit<UserModel, undefined>;
  submitHandler?: (data: UserModel) => void;
}
