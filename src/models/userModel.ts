import { BaseModel } from '@/types';

export interface UserModel extends BaseModel {
  phoneNumber?: string;
  fullName?: string;
  email?: string;
  password?: string;
  birthday?: string;
  customerAddressId?: string;
  otp?: string;
  orderIds?: string[];
  customerType?: UserType;
  avatar?: string;

  [key: string]: any;
}

export enum UserType {
  NEW = 'NEW',
  EXIST = 'EXIST',
  POTENTIAL = 'POTENTIAL',
  BUY_THE_MOST_ORDERS = 'BUY_THE_MOST_ORDERS',
}
