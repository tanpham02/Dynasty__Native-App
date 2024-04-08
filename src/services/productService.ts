import { API_PRODUCT_SEARCH_URL } from '@/constants';
import { CategoryModel, ProductModel } from '@/models';
import axiosService from './axiosService';
import { ListDataResponse, SearchParams } from '@/types';

const productService = {
  getProducts: async (params: SearchParams): Promise<ListDataResponse<ProductModel>> => {
    return (await axiosService())({
      baseURL: API_PRODUCT_SEARCH_URL,
      method: 'GET',
      params,
    })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  },
};
export default productService;
