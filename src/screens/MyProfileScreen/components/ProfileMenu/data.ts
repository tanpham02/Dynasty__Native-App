import { showMessage } from 'react-native-flash-message';
import { Linking } from 'react-native';
import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';
import { ProfileMenuItemProps } from '../ProfileMenuItem/type';

export const menus: ProfileMenuItemProps[] = [
  {
    Icon: Svg.HeartOutline,
    label: 'Danh sách yêu thích',
    onPress: () => {},
  },
  {
    Icon: Svg.Location,
    label: 'Địa chỉ đã lưu',
    onPress: () => NavigationUtils.navigate(PathName.PATH_SCREEN.ADDRESS_SAVED),
  },
  {
    Icon: Svg.Package,
    label: 'Đơn hàng của tôi',
    onPress: () => {},
  },
  {
    Icon: Svg.Support,
    label: 'Liên hệ hỗ trợ',
    onPress: () => Linking.openURL('tel:0984316437'),
  },
  {
    Icon: Svg.Logout,
    label: 'Đăng xuất',
    onPress: () => {
      NavigationUtils.navigate(PathName.PATH_SCREEN.SIGN_IN_SCREEN);
      showMessage({
        message: 'Đăng xuất thành công!',
        type: 'success',
      });
    },
  },
];
