import { Box, Image, Text } from 'native-base';

import { DateUtils } from '@/utils';
import Logo from '@/assets/images/logo/dynasty-logo.png';
import { TouchableOpacity } from 'react-native';

const NotificationItem = () => {
  return (
    <Box className='bg-white'>
      <TouchableOpacity className='flex-row py-2 px-4 items-center'>
        <Image source={Logo} className='w-10 h-10' resizeMode='contain' alt='logo' />
        <Box className='ml-2 flex-1'>
          <Text className='font-nunito-500 text-sm text-zinc-800'>
            Đơn hàng của bạn đã chuẩn bị hoàn tất. Vui lòng di chuyển đến nơi nhận hàng để lấy hàng
          </Text>
          <Text className='text-[13px] text-zinc-500 font-nunito-500'>
            {DateUtils.formatDate(new Date(), DateUtils.DATE_FORMAT_HHMMDDMMYYYY)}
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default NotificationItem;
