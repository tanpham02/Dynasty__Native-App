import { useQuery } from "react-query"

import { QueryKey } from "@/constants"
import { UserService } from "@/services"
import { UserAddressResponse, UserModel } from "@/models"

interface FetchUserParams {
    userId: string
}

export const useFetchUserInfo = ({ userId }: FetchUserParams) => {
    return useQuery<UserModel, Error>({
        queryKey: [QueryKey.QUERY_KEY.USER, userId],
        queryFn: async () => await UserService.getInfoById(userId),
    })
}

export const useFetchUserAddress = ({ userId }: FetchUserParams) => {
    return useQuery<UserAddressResponse, Error>({
        queryKey: [QueryKey.QUERY_KEY.USER_ADDRESS, userId],
        queryFn: async () => await UserService.getSavedAddress(userId),
    })
}