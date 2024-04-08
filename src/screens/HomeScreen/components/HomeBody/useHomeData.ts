import { useState } from "react";
import { useDispatch } from "react-redux";

import { tokenManager } from "App";
import { AppDispatch, getUserInfo } from "@/redux";
import { useFetchAllBanner, useFetchAllCategories } from "@/hooks";

export const useHomeData = () => {
    const dispatch = useDispatch<AppDispatch>();

    const isAuthenticated = tokenManager.getAccessToken();

    const [isRefetchingHomeData, setIsRefetchingHomeData] = useState<boolean>();

    const {
        data: categoriesData,
        isFetching: isFetchingCategories,
        refetch: refetchCategories,
    } = useFetchAllCategories();

    const { data: bannersData, isFetching: isFetchingBanners, refetch: refetchBanners } = useFetchAllBanner();

    const getUserLoginInfo = () => {
        if (isAuthenticated) {
            dispatch(getUserInfo());
        }
    }

    const refetchHomeData = async () => {
        setIsRefetchingHomeData(true);
        await Promise.all([refetchCategories(), refetchBanners()]);
        setIsRefetchingHomeData(false);
    };


    return {
        getUserLoginInfo,
        refetchHomeData,
        isRefetchingHomeData,
        setIsRefetchingHomeData,
        categoriesData,
        isFetchingCategories,
        bannersData,
        isFetchingBanners
    } as const
}