import { Box } from 'native-base';

import styles from '@/styles';
import { menus } from './data';
import ProfileMenuItem from '../ProfileMenuItem';

const ProfileMenu = () => {
  return (
    <Box className='bg-white rounded-lg mb-5 py-2' style={styles.shadowX}>
      {menus.map((item, index) => (
        <ProfileMenuItem key={index} {...item} />
      ))}
    </Box>
  );
};

export default ProfileMenu;
