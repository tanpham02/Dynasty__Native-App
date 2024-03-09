import { useQuery } from "react-query"

import { QueryKey } from "@/constants"
import { CategoryService } from "@/services"
import { CategoryModel } from "@/models"

export const useFetchAllCategories = () => {
    return useQuery<CategoryModel[], Error>({
        queryKey: [QueryKey.QUERY_KEY.ALL_CATEGORIES],
        queryFn: CategoryService.getAllCategories,
    })
}