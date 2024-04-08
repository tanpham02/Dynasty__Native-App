import { UserModel } from './userModel';

export interface SignInWithGoogleRequest {
  accessToken: string;
}

export interface SignInResponse {
  customerInfo: UserModel;
  accessToken: string;
  refreshToken: string;
}
