import { Box, ScrollView } from 'native-base';

import { PrimaryLayout } from '@/components';
import { MyProfileCard, ProfileMenu, SignOutButton } from './components';

const MyProfileScreen = () => {
  return (
    <PrimaryLayout titleScreen='Tài khoản của tôi'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box className='px-4 -mt-2'>
          <MyProfileCard />
          <ProfileMenu />
          <SignOutButton />
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default MyProfileScreen;
