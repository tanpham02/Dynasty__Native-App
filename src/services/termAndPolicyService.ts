import { API_TERM_AND_POLICY_SEARCH_URL } from '@/constants';
import axiosService from './axiosService';

const termAndPolicyService = {
  getAll: async () => {
    return (await axiosService())({
      baseURL: API_TERM_AND_POLICY_SEARCH_URL,
      method: 'GET',
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};

export default termAndPolicyService;
