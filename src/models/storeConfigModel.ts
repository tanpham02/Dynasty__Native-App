import { BaseModel } from '@/types';
import { LocationBaseModel } from './locationModel';

export interface StoreSettingModel extends BaseModel {
  feeShip?: string;
  transferContent?: string;
  reasonOrderCancel?: string[];
  hotline?: string;
}

export interface FrequentlyAskedQuestionsModel extends BaseModel {
  question?: string;
  answer?: string;
}

export interface TermAndPolicyModel extends BaseModel {
  deliveryPolicy?: string;
  privatePolicy?: string;
  termAndCondition?: string;
}

export interface StoreInformationModel extends LocationBaseModel, BaseModel {
  brandStore?: string; // Câu chuyện thương hiệu
  logo?: string; // logo cửa hàng
  name?: string;
  description?: string;
  email?: string;
  phoneNumber?: string;
  taxCode?: string;
}

export interface BankAccountConfigModel extends BaseModel {
  bankCode?: string | string[];
  bankNumber?: string;
  bankName?: string;
  bankBranch?: string;
}

export interface EmailConfigModel extends BaseModel {
  username: string;
  password: string;
  mailServer: string; // SMTP
  port: number; // 587
  isDefault: boolean; // false
}

export interface StoreConfigModel extends BaseModel {
  storeSetting?: StoreSettingModel;
  storeInformation?: StoreInformationModel;
  faqs?: FrequentlyAskedQuestionsModel[];
  termAndPolicy?: TermAndPolicyModel;
  emailConfig?: EmailConfigModel;
  bankAccountConfig?: BankAccountConfigModel;

  cancelReasons?: {
    reason: string;
  }[];
  [key: string]: any;
}
