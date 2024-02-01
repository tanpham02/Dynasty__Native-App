import { ScrollView, Text } from 'react-native';

import { PrimaryLayout } from 'src/components/Layout';
import styles from '../OtherScreen/styles';
import UserHeader from './components/UserHeader';
import UtilitiesGroup from './components/UtilitiesGroup';
import MenuGroup from './components/MenuGroup';
import { MenuGroupItem } from './components/MenuGroup/type';
import PhoneSvg from '@/assets/svg/pizza.svg';
import UserSvg from '@/assets/svg/pizza.svg';
import LocationSvg from '@/assets/svg/pizza.svg';
import InfoSvg from '@/assets/svg/pizza.svg';
import LogoutSvg from '@/assets/svg/pizza.svg';
import { PathName } from 'src/constants';

const contactMenus: MenuGroupItem[] = [
  {
    Icon: PhoneSvg,
    label: 'Thông tin liên hệ',
  },
];

const accountMenus: MenuGroupItem[] = [
  {
    Icon: UserSvg,
    label: 'Thông tin cá nhân',
  },
  {
    Icon: LocationSvg,
    label: 'Địa chỉ đã lưu',
  },
  {
    Icon: InfoSvg,
    label: 'Về chúng tôi',
    pathName: PathName.PATH_SCREEN.ABOUT_US_SCREEN,
  },
  {
    Icon: LogoutSvg,
    label: 'Đăng xuất',
    hideArrow: true,
  },
];

const OtherScreen = () => {
  return (
    <PrimaryLayout title="Khác" style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <UserHeader />
        <UtilitiesGroup />
        <MenuGroup label="Hỗ trợ" items={contactMenus} />
        <MenuGroup label="Tài khoản" items={accountMenus} />
        <Text style={styles.version}>Version 1.0</Text>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default OtherScreen;
