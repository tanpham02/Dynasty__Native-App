import { authenticateAsync, supportedAuthenticationTypesAsync } from 'expo-local-authentication';
import { showMessage } from 'react-native-flash-message';
import { RSA } from 'react-native-rsa-native';
import { useSelector } from 'react-redux';

import { Svg } from '@/assets';
import { PATH_SCREEN } from '@/constants';
import { StoreConfigModel } from '@/models';
import { RootState } from '@/redux';
import { navigate } from '@/utils';
import { Linking } from 'react-native';
import { ProfileMenuItemProps } from '../ProfileMenuItem/type';

export const useProfileMenuData = () => {
  const storeConfig = useSelector<RootState, StoreConfigModel>((state) => state.storeStore.storeConfig);

  const askForBiometrics = async () =>
    await authenticateAsync({
      disableDeviceFallback: true,
      promptMessage: 'Đăng nhập sinh trắc học',
      cancelLabel: 'Không phải bây giờ',
    });

  const enableBiometrics = async () => {
    const isSupportBiometrics = await supportedAuthenticationTypesAsync();
    console.log('🚀 ~ enableBiometrics ~ isSupportBiometrics:', isSupportBiometrics);

    if (isSupportBiometrics) {
      const biometricsResult = await askForBiometrics();
      if (biometricsResult?.success) {
        //Create Key pair
        const keys = await RSA.generateKeys(1024);
        console.log('🚀 ~ enableBiometrics ~ keys:', keys);
        // Use secure Store as it provides a way to encrypt and securely store key–value pairs locally on the device.
        //   await SecureStore.setItemAsync('USER_BIOMETRIC_KEY', keys.private);
      }
    } else {
      showMessage({
        message: 'Thiết bị của bạn không hỗ trợ tính năng này!',
        type: 'danger',
      });
    }
  };

  const menus: ProfileMenuItemProps[] = [
    {
      Icon: Svg.UserPlus,
      label: 'Cập nhật tài khoản',
      onPress: () => navigate(PATH_SCREEN.UPDATE_PROFILE_SCREEN),
    },
    {
      Icon: Svg.HeartOutline,
      label: 'Danh sách yêu thích',
      onPress: () => navigate(PATH_SCREEN.CATEGORIES_SCREEN),
    },
    {
      Icon: Svg.Location,
      label: 'Địa chỉ đã lưu',
      onPress: () => navigate(PATH_SCREEN.ADDRESS_SAVED_SCREEN),
    },
    {
      Icon: Svg.Package,
      label: 'Đơn hàng của tôi',
      onPress: () => navigate(PATH_SCREEN.ORDER_HISTORY_SCREEN),
    },
    {
      Icon: Svg.Authentication,
      label: 'Đăng nhập nhanh bằng sinh trắc học',
      onPress: enableBiometrics,
    },
    {
      Icon: Svg.Support,
      label: 'Liên hệ hỗ trợ',
      onPress: () => Linking.openURL(`tel:${storeConfig?.storeInformation?.phoneNumber}`),
    },
  ];

  return { menus } as const;
};
