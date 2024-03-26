import { Box, Text, Image } from 'native-base';
import { useSelector } from 'react-redux';

import { UserModel } from '@/models';
import { RootState } from '@/redux';
import { getFullImageUrl } from '@/utils';

const MyProfileCard = () => {
  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  return (
    <Box className='items-center p-4'>
      <Box className='w-16 h-16 bg-primary items-center justify-center rounded-full relative'>
        {user?.avatar ? (
          <Image source={{ uri: getFullImageUrl(user.avatar) }} className='w-full h-full rounded-full' />
        ) : (
          <Text className='font-nunito-700 text-white uppercase text-lg'>{user?.fullName?.charAt(0)}</Text>
        )}
        <Box className='w-3.5 h-3.5 rounded-full absolute bottom-0 right-1 bg-green-600 border-2 border-white' />
      </Box>
      <Text className='font-nunito-700 text-lg mt-2 text-zinc-700'>{user?.fullName}</Text>
      <Text className='font-nunito-500 text-[13px] text-zinc-500'>{user?.phoneNumber || user?.email}</Text>
    </Box>
  );
};

export default MyProfileCard;
