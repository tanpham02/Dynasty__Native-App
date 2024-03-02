import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';

const NotificationHiddenItem = () => {
  return (
    <Box className='items-center justify-end flex-row h-full'>
      <TouchableOpacity className='bg-zinc-400 aspect-square h-full items-center justify-center'>
        <Svg.Eye width={25} height={25} className='text-white' />
        <Text className='text-xs font-nunito-700 text-white mt-1'>Đã đọc</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-secondary aspect-square h-full items-center justify-center'>
        <Svg.TrashBin width={25} height={25} className='text-white' />
        <Text className='text-xs font-nunito-700 text-white mt-1'>Xóa</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default NotificationHiddenItem;
