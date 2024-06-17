import { STORE_CONFIG_SERVICE_URL } from '@/constants';
import axiosService from './axiosService';
import { StoreConfigModel } from '@/models';

const storeConfigService = {
  getStoreConfig: async (): Promise<StoreConfigModel> => {
    return (await axiosService())({
      baseURL: STORE_CONFIG_SERVICE_URL,
      method: 'GET',
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};

export default storeConfigService;
