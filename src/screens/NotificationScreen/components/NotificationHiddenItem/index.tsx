import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';

const NotificationHiddenItem = () => {
  return (
    <Box className='items-center justify-end flex-row h-full'>
      <TouchableOpacity className='bg-zinc-400 h-14 aspect-square mr-2 items-center justify-center rounded-xl'>
        <Svg.Eye width={25} height={25} className='text-white' />
        <Text className='text-xs font-nunito-700 text-white mt-1'>Đã đọc</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-secondary h-14 aspect-square mr-2 items-center justify-center rounded-xl'>
        <Svg.TrashBin width={25} height={25} className='text-white' />
        <Text className='text-xs font-nunito-700 text-white mt-1'>Xóa</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default NotificationHiddenItem;
