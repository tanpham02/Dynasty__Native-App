import axios, {AxiosInstance} from 'axios';

import {API_BASE_URL} from 'src/constants/apiURL';
import {checkTokenExp} from 'src/utils/tokenUtils';
import {tokenManager} from '../../App';
import authenticationService from './authenticationService';

let refreshTokenRequest: any = null;
const loadRefreshToken = async (refreshToken: string) => {
  try {
    const response = await authenticationService.refreshToken({
      refreshToken: refreshToken,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosService = async (): Promise<AxiosInstance> => {
  if (!tokenManager.initialized) {
    await tokenManager.initialize();
  }
  const accessToken = tokenManager.getAccessToken();
  const refreshToken = tokenManager.getRefreshToken() || '';
  const userId = tokenManager.getUserId() || '';

  const axiosOption = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: accessToken ? true : false,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
      customerId: userId,
    },
  });

  axiosOption.interceptors.request.use(
    async config => {
      if (accessToken && !checkTokenExp(accessToken)) {
        refreshTokenRequest = refreshTokenRequest
          ? refreshTokenRequest
          : loadRefreshToken(refreshToken);
        try {
          const response = await refreshTokenRequest;
          if (response) {
            await tokenManager.setAccessToken(response?.accessToken);
            config.headers = {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + response?.accessToken,
            };

            refreshTokenRequest = null;
          }
        } catch (error: any) {
          refreshTokenRequest = null;
        }
        return config;
      }

      return config;
    },

    error => {
      Promise.reject(error);
    },
  );

  axiosOption.interceptors.response.use(
    response => {
      return response;
    },
    errors => {
      console.log(
        'Error:',
        JSON.stringify(
          {
            url: errors?.response?.config.url,
            status: errors?.response?.status,
            method: errors?.response?.config.method,
            data: errors?.response?.data,
            headers: errors?.response?.headers,
          },
          null,
          2,
        ),
      );
      if (errors?.response?.status === 401) {
        //
      }

      throw errors;
    },
  );

  return axiosOption;
};

export default axiosService;
