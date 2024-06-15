import { Avatar, Box, Text } from 'native-base';
import { useSelector } from 'react-redux';

import { UserModel } from '@/models';
import { RootState } from '@/redux';
import { getFullImageUrl } from '@/utils';

const MyProfileCard = () => {
  const user = useSelector<RootState, UserModel>((state) => state.userStore.user);

  return (
    <Box className='items-center p-4'>
      <Avatar
        size='lg'
        source={{ uri: getFullImageUrl(user?.avatar) }}
        className='items-center justify-center rounded-full relative bg-secondary'
      >
        {user?.fullName?.charAt(0)}
        <Avatar.Badge />
      </Avatar>
      <Text className='font-nunito-700 text-lg mt-2 text-zinc-700'>{user?.fullName}</Text>
      <Text className='font-nunito-500 text-[13px] text-zinc-500'>{user?.phoneNumber || user?.email}</Text>
    </Box>
  );
};

export default MyProfileCard;
