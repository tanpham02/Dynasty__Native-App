import { UseInfiniteQueryOptions, useInfiniteQuery } from 'react-query';

import { QUERY_KEY } from '@/constants';
import { ProductService } from '@/services';

interface FetchProductParams {
  pageSize?: number;
  categoryId: string;
  options?: UseInfiniteQueryOptions<any>;
}

export const useFetchProducts = ({ pageSize = 10, categoryId, options }: FetchProductParams) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.PRODUCT, categoryId],
    queryFn: ({ pageParam = 0 }) => ProductService.getProducts({ pageIndex: pageParam, pageSize, categoryId }),
    getNextPageParam: (paging) => {
      return paging.isLastPage ? undefined : paging.pageSize + 1;
    },
    ...options,
  });
};
