import { Box, ScrollView } from 'native-base';

import { PrimaryLayout } from '@/components';
import { MyProfileCard, ProfileMenu } from './components';

const MyProfileScreen = () => {
  return (
    <PrimaryLayout titleScreen='Tài khoản của tôi'>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <Box className='px-4 -mt-2'>
          <MyProfileCard />
          <ProfileMenu />
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default MyProfileScreen;
