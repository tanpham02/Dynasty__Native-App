import { useQuery } from "react-query"

import { QueryKey } from "@/constants"
import { BannerModel } from "@/models"
import { BannerService } from "@/services"

export const useFetchAllBanner = () => {
    return useQuery<BannerModel[], Error>({
        queryKey: [QueryKey.QUERY_KEY.ALL_BANNER],
        queryFn: BannerService.getAllBanners,
    })
}