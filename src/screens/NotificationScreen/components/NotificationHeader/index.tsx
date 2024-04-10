import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';

const NotificationHeader = () => {
  return (
    <Box className='justify-center flex-row flex-1'>
      <Text className='font-nunito-700 text-lg text-center -ml-16'>Dynasty Pizza</Text>
      <TouchableOpacity className='p-1 absolute top-0 right-4'>
        <Svg.MarkAllAsRead width={20} height={20} className='text-zinc-400' />
      </TouchableOpacity>
    </Box>
  );
};

export default NotificationHeader;
