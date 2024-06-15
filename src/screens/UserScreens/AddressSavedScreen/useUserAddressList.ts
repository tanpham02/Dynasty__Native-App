import { showMessage } from 'react-native-flash-message';

import { globalLoading } from '@/components';
import { PATH_SCREEN } from '@/constants';
import { useFetchUserAddress } from '@/hooks';
import { UserService } from '@/services';
import { navigate } from '@/utils';

export const useUserAddressList = () => {
  const {
    data: userSavedAddresses,
    isFetching: isFetchingUserAddress,
    refetch: refetchUserAddress,
    isRefetching: isRefetchingUserAddress,
  } = useFetchUserAddress();

  const deleteUserAddress = async (userAddressId: string) => {
    try {
      globalLoading.show();
      await UserService.deleteAddressById(userAddressId);
      await refetchUserAddress();
      showMessage({
        message: 'Xóa địa chỉ giao hàng thành công!',
        type: 'success',
      });
    } catch (err) {
      console.log('🚀 ~ deleteUserAddress ~ err:', err);
      showMessage({
        message: 'Có lỗi xảy ra vui lòng thử lại sau!',
        type: 'danger',
      });
    } finally {
      globalLoading.hide();
    }
  };

  const updateUserAddress = (userAddressId: string) =>
    navigate(PATH_SCREEN.ADDRESS_UPDATE_SCREEN, { id: userAddressId });

  return {
    userSavedAddresses,
    isFetchingUserAddress,
    isRefetchingUserAddress,
    refetchUserAddress,
    deleteUserAddress,
    updateUserAddress,
  } as const;
};
