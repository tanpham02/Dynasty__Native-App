import { tokenManager } from 'App';
import * as ApiURL from '@/constants';
import axiosService from './axiosService';
import { UserAddressModel, UserAddressRequest, UserAddressResponse, UserModel } from '@/models';

const userService = {
  getInfoById: async (userId: string): Promise<UserModel> => {
    return (await axiosService())({
      baseURL: `${ApiURL.API_CUSTOMER_URL}/${userId}`,
      method: 'GET',
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getInfo: async (): Promise<UserModel> => {
    return (await axiosService())({
      baseURL: ApiURL.API_CUSTOMER_INFO_URL,
      method: 'POST',
      data: {
        accessToken: tokenManager.getAccessToken() || '',
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  updateInfoById: async (userId: string, data: FormData): Promise<UserModel> => {
    return (await axiosService())({
      baseURL: `${ApiURL.API_CUSTOMER_URL}/${userId}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'multipart-form/data',
      },
      data,
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  deleteAccountById: async (userIds: string): Promise<UserModel> => {
    return (await axiosService())({
      baseURL: ApiURL.API_CUSTOMER_URL,
      method: 'DELETE',
      params: {
        ids: userIds,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getSavedAddress: async (userId: string): Promise<UserAddressResponse> => {
    return (await axiosService())({
      baseURL: `${ApiURL.API_CUSTOMER_ADDRESS_URL}/${userId}`,
      method: 'GET',
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  getSavedAddressById: async (addressId: string): Promise<UserAddressModel> => {
    return (await axiosService())({
      baseURL: `${ApiURL.API_CUSTOMER_ADDRESS_URL}/${addressId}`,
      method: 'GET',
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  createNewAddress: async (data: UserAddressRequest): Promise<UserAddressResponse> => {
    return (await axiosService())({
      baseURL: ApiURL.API_CUSTOMER_ADDRESS_URL,
      method: 'POST',
      data,
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  updateAddressById: async (addressId: string, data: FormData): Promise<UserAddressResponse> => {
    return (await axiosService())({
      baseURL: `${ApiURL.API_CUSTOMER_ADDRESS_URL}/${addressId}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'multipart-form/data',
      },
      data,
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
  deleteAddressById: async (addressId: string): Promise<UserAddressResponse> => {
    return (await axiosService())({
      baseURL: `${ApiURL.API_CUSTOMER_ADDRESS_URL}/${addressId}`,
      method: 'DELETE',
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};

export default userService;
