import { useQuery } from "react-query"

import { QUERY_KEY } from "@/constants"
import { CategoryService } from "@/services"
import { CategoryModel } from "@/models"

export const useFetchAllCategories = () => {
    return useQuery<CategoryModel[], Error>({
        queryKey: [QUERY_KEY.ALL_CATEGORIES],
        queryFn: CategoryService.getAllCategories,
    })
}