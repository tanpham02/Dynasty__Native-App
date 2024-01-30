import configEnv from 'src/configs';

export const API_BASE_URL: string = configEnv.API_BASE_URL;

const API_AUTH_URL: string = `${API_BASE_URL}auth/`;
export const API_AUTHENTICATION_URL = {
  SIGN_IN_URL: `${API_AUTH_URL}signin`,
  SIGN_OUT_URL: `${API_AUTH_URL}signout`,
  REFRESH_TOKEN_URL: `${API_AUTH_URL}refresh-token`,
};
