import { useForm } from "react-hook-form";
import { showMessage } from "react-native-flash-message";

import { navigate } from "@/utils";
import { UserService } from "@/services";
import { PATH_SCREEN } from "@/constants";
import { GlobalLoading } from "@/components";
import { UserAddressModel, UserAddressRequest, UserModel } from "@/models";

export const useUserAddressForm = () => {
    const formMethods = useForm<UserAddressModel>();

    const { reset, setValue, watch, handleSubmit } = formMethods

    const currentUserAddressData = watch();

    const createOrUpdateUserAddress = async (data: UserAddressModel) => {
        try {
            GlobalLoading.show();
            const formData = new FormData();

            const dataSubmit: UserAddressRequest = {
                customerId: '6610186d6861b729f3d2ffc5',
                addressItem: {
                    ...data,
                    cityId: Number(data.cityId),
                    districtId: Number(data.districtId),
                    wardId: Number(data.wardId),
                },
            };

            formData.append('customerAddressInfo', JSON.stringify(dataSubmit));

            await UserService.createNewAddress(formData);
            showMessage({
                message: 'Thêm địa chỉ giao hàng thành công!',
                type: 'success',
            });
            navigate(PATH_SCREEN.ADDRESS_SAVED_SCREEN);
        } catch (err) {
            showMessage({
                message: 'Có lỗi xảy ra vui lòng thử lại sau!',
                type: 'danger',
            });
            console.log('🚀 ~ onCreateOrUpdateDeliveryAddress ~ err:', err);
        } finally {
            GlobalLoading.hide();
        }
    };

    const handleSubmitUserAddressForm = handleSubmit(createOrUpdateUserAddress)

    const fillUserData = (user: UserModel) => {
        if (user && Object.keys(user).length > 0) {
            reset({
                phoneNumber: user?.phoneNumber,
                fullName: user?.fullName,
            });
        }
    }

    const handleFillCreatedAddressData = async (userAddressId?: string) => {

        if (!userAddressId) return

        try {
            GlobalLoading.show()
            const userAddressResponse = await UserService.getSavedAddressById(userAddressId)
            reset({ ...userAddressResponse })
        } catch (err) {
            console.log("🚀 ~ handleFillCreatedAddressData ~ err:", err)
            showMessage({
                message: "Có lỗi xảy ra vui lòng thử lại sau!",
                type: "danger"
            })
        } finally {
            GlobalLoading.show()
        }
    }

    const clearSelectedAddress = () => {
        setValue('wardId', undefined);
        setValue('districtId', undefined);
    }

    return { formMethods, handleSubmitUserAddressForm, fillUserData, clearSelectedAddress, currentUserAddressData, handleFillCreatedAddressData } as const
}