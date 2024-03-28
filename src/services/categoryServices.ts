import { API_CATEGORY_SEARCH_URL, API_CATEGORY_SEARCH_ALL_URL } from "@/constants"
import { CategoryModel } from "@/models"
import axiosService from "./axiosService"
import { ListDataResponse, SearchParams } from "@/types"

const categoryService = {
    getCategories: async (params: SearchParams):
        Promise<ListDataResponse<CategoryModel>> => {
        return (await axiosService())({
            baseURL: API_CATEGORY_SEARCH_URL,
            method: "GET",
            params
        })
            .then(res => res.data)
            .catch(err => { throw err })
    },
    getAllCategories: async ():
        Promise<CategoryModel[]> => {
        return (await axiosService())({
            baseURL: API_CATEGORY_SEARCH_ALL_URL,
            method: "GET",
        })
            .then(res => res.data)
            .catch(err => { throw err })
    },
}
export default categoryService