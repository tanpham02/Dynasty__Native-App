import { Svg } from '@/assets';
import { PathName } from '@/constants';
import { navigate } from '@/utils';
import { Linking } from 'react-native';
import { ProfileMenuItemProps } from '../ProfileMenuItem/type';

export const menus: ProfileMenuItemProps[] = [
    {
        Icon: Svg.UserPlus,
        label: 'Cập nhật tài khoản',
        onPress: () => navigate(PathName.PATH_SCREEN.UPDATE_PROFILE_SCREEN)
    }, {
        Icon: Svg.HeartOutline,
        label: 'Danh sách yêu thích',
        onPress: () => navigate(PathName.PATH_SCREEN.CATEGORIES_SCREEN),
    },
    {
        Icon: Svg.Location,
        label: 'Địa chỉ đã lưu',
        onPress: () => navigate(PathName.PATH_SCREEN.ADDRESS_SAVED_SCREEN),
    },
    {
        Icon: Svg.Package,
        label: 'Đơn hàng của tôi',
        onPress: () => navigate(PathName.PATH_SCREEN.ORDER_HISTORY_SCREEN),
    },
    {
        Icon: Svg.Support,
        label: 'Liên hệ hỗ trợ',
        onPress: () => Linking.openURL('tel:0984316437'),
    },
];
