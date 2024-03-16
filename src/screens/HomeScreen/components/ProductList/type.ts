import { CategoryModel } from "@/models";

export interface ProductListProps extends CategoryModel {
    isLoading: boolean
    isRefetching?: boolean
}