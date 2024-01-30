import axios from 'axios';
import {API_AUTHENTICATION_URL} from 'src/constants/apiURL';
import axiosService from './axiosService';
interface RefreshToken {
  refreshToken: string | null;
}
export interface RefreshTokenResponse {
  accessToken: string;
}
export interface SignIn {
  username: string;
  password: string;
}
export interface SignInResponse {
  id: number;
  username: string;
  accessToken: string;
  type: string;
  refreshToken: string;
}
interface Logout {
  pushToken: string | null;
}
export interface LogoutResponse {
  message: string;
}

const authenticationService = {
  refreshToken: async (params: RefreshToken): Promise<RefreshTokenResponse> => {
    return axios({
      method: 'POST',
      url: API_AUTHENTICATION_URL.REFRESH_TOKEN_URL,
      headers: {
        'Content-Type': 'text/plain',
      },
      data: params?.refreshToken,
    })
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  },
  signIn: async (params: SignIn): Promise<SignInResponse> => {
    return axios({
      method: 'POST',
      url: API_AUTHENTICATION_URL.SIGN_IN_URL,
      data: params,
    })
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  },
  signOut: async (params: Logout): Promise<LogoutResponse> => {
    return (await axiosService())({
      method: 'POST',
      url: API_AUTHENTICATION_URL.SIGN_OUT_URL,
      params,
    })
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  },
};

export default authenticationService;
