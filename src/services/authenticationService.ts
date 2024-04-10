import axios from 'axios';

import { API_SIGN_IN_URL } from '@/constants';
import { SignInResponse, SignInWithGoogleRequest } from '@/models';

const authenticationService = {
  signInWithGoogle: async (data: SignInWithGoogleRequest): Promise<SignInResponse> => {
    return axios({
      method: 'POST',
      url: API_SIGN_IN_URL,
      data,
    })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  },
  refreshToken: (refreshToken: SignInResponse['refreshToken']) => {
    console.log('refreshToken', refreshToken);
    return null;
  },
};

export default authenticationService;
