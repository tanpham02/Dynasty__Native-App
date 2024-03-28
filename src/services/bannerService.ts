import { API_BANNER_SEARCH_URL } from "@/constants"
import { BannerModel } from "@/models"
import axiosService from "./axiosService"

const bannerService = {
    getAllBanners: async (): Promise<BannerModel[]> => {
        return (await axiosService())({
            baseURL: API_BANNER_SEARCH_URL,
            method: "GET"
        })
            .then(res => res.data)
            .catch(err => { throw err })
    }
}

export default bannerService