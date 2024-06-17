import { Box } from 'native-base';

import ProfileMenuItem from '../ProfileMenuItem';
import { useProfileMenuData } from './useProfileMenuData';

const ProfileMenu = () => {
  const { menus } = useProfileMenuData();

  return (
    <Box className='rounded-lg py-2'>
      {menus.map((item, index) => (
        <ProfileMenuItem key={index} {...item} />
      ))}
    </Box>
  );
};

export default ProfileMenu;
