import { Box } from 'native-base';

import { menus } from './data';
import ProfileMenuItem from '../ProfileMenuItem';

const ProfileMenu = () => {
  return (
    <Box className='rounded-lg py-2'>
      {menus.map((item, index) => (
        <ProfileMenuItem key={index} {...item} />
      ))}
    </Box>
  );
};

export default ProfileMenu;
