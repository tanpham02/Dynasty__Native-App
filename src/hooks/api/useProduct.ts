import { useInfiniteQuery } from "react-query"

import { QueryKey } from "@/constants"
import { ProductService } from "@/services"

interface FetchProductParams {
    pageSize: number
    categoryId: string
}

export const useFetchProducts = ({ pageSize = 10, categoryId }: FetchProductParams) => {
    return useInfiniteQuery({
        queryKey: [QueryKey.QUERY_KEY.PRODUCT, categoryId],
        queryFn: ({ pageParam = 0 }) =>
            ProductService.getProducts({ pageIndex: pageParam, pageSize, categoryId }),
        getNextPageParam: (paging) => {
            if (!paging.isLastPage) {
                return paging.pageSize + 1
            }
            return null
        }
    })
}