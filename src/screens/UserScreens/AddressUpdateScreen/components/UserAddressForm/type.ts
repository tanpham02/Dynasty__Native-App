import { UserAddressModel } from '@/models';
import { UseFormReturn } from 'react-hook-form';

export interface UserAddressFormProps {
  formMethods: UseFormReturn<UserAddressModel, any, undefined>;
  currentUserAddressData: UserAddressModel;
}
