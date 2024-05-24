import { Box, Image, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';
import { getFullImageUrl } from '@/utils';
import { MyAvatarProps } from './type';

const MyAvatar = ({ onChangeAvatar, user }: MyAvatarProps) => {
  return (
    <Box className='bg-white rounded-lg p-4 items-center'>
      <TouchableOpacity
        onPress={onChangeAvatar}
        className='w-16 h-16 bg-secondary items-center justify-center rounded-full relative'
      >
        {user?.image ? (
          <Image
            alt='avatar'
            resizeMode='cover'
            className='w-full h-full rounded-full'
            source={{ uri: getFullImageUrl(user?.image) }}
          />
        ) : (
          <Text className='font-nunito-700 text-white uppercase text-lg'>{user?.fullName?.charAt(0) || 'A'}</Text>
        )}
        <Box className='w-6 h-6 bg-black/70 rounded-full absolute -bottom-1 right-0 items-center justify-center border border-white'>
          <Svg.Camera width={14} height={14} className='text-white' />
        </Box>
      </TouchableOpacity>
      <Text className='font-nunito-700 text-lg mt-2 text-zinc-700'>{user?.fullName}</Text>
      <Text className='font-nunito-500 text-[13px] text-zinc-500'>{user?.phoneNumber || user?.email}</Text>
    </Box>
  );
};

export default MyAvatar;
