import { showMessage } from "react-native-flash-message";

import { UserService } from "@/services";
import { GlobalLoading } from "@/components";
import { useFetchUserAddress } from "@/hooks";
import { navigate } from "@/utils";
import { PATH_SCREEN } from "@/constants";

export const useUserAddressList = () => {
    const {
        data: userSavedAddresses,
        isFetching: isFetchingUserAddress,
        refetch: refetchUserAddress,
        isRefetching: isRefetchingUserAddress,
    } = useFetchUserAddress();

    const deleteUserAddress = async (userAddressId: string) => {
        try {
            GlobalLoading.show()
            await UserService.deleteAddressById(userAddressId)
            await refetchUserAddress()
            showMessage({
                message: "Xóa địa chỉ giao hàng thành công!",
                type: "success"
            })
        } catch (err) {
            console.log("🚀 ~ deleteUserAddress ~ err:", err)
            showMessage({
                message: "Có lỗi xảy ra vui lòng thử lại sau!",
                type: "danger"
            })
        } finally {
            GlobalLoading.hide()
        }
    }

    const updateUserAddress = (userAddressId: string) => navigate(PATH_SCREEN.ADDRESS_UPDATE_SCREEN, { id: userAddressId })

    return {
        userSavedAddresses,
        isFetchingUserAddress,
        isRefetchingUserAddress,
        refetchUserAddress,
        deleteUserAddress,
        updateUserAddress
    } as const;
}