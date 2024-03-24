import { UseInfiniteQueryOptions, useInfiniteQuery } from "react-query"

import { QueryKey } from "@/constants"
import { ProductService } from "@/services"

interface FetchProductParams {
    pageSize: number
    categoryId: string
    options?: UseInfiniteQueryOptions<any>
}

export const useFetchProducts = ({ pageSize = 10, categoryId, options }: FetchProductParams) => {
    return useInfiniteQuery({
        queryKey: [QueryKey.QUERY_KEY.PRODUCT, categoryId],
        queryFn: ({ pageParam = 0 }) =>
            ProductService.getProducts({ pageIndex: pageParam, pageSize, categoryId }),
        getNextPageParam: (paging) => {
            return paging.isLastPage ? undefined : paging.pageSize + 1
        },
        ...options
    })
}