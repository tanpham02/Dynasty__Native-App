import axios from 'axios';

import { ApiURL } from '@/constants';
import { SignInResponse, SignInWithGoogleRequest } from '@/models';

const authenticationService = {
    signInWithGoogle: async (data: SignInWithGoogleRequest): Promise<SignInResponse> => {
        return axios({
            method: 'POST',
            url: ApiURL.API_SIGN_IN_URL,
            data
        })
            .then((res) => res.data)
            .catch((error) => {
                throw error;
            });
    },
};

export default authenticationService;
