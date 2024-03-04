import { Box, Image, Text } from 'native-base';

import EmailIcon from '@/assets/images/email-icon.png';
import { TouchableOpacity } from 'react-native';

const NotificationItem = () => {
  return (
    <Box className='bg-white'>
      <TouchableOpacity className='flex-row py-2 px-4 items-center'>
        <Image source={EmailIcon} className='w-9 h-9' resizeMode='contain' alt='logo' />
        <Box className='ml-2 flex-1'>
          <Text className='font-nunito-700 text-sm text-zinc-800 uppercase' numberOfLines={2}>
            Đơn hàng của bạn đã chuẩn bị hoàn tất. Vui lòng di chuyển đến nơi nhận hàng để lấy hàng
          </Text>
          <Text className='text-[13px] text-zinc-500 font-nunito-500' numberOfLines={1}>
            Hệ thống Website và ứng dụng Dynasty Pizza sẽ bảo trì trong ít phút nữa
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default NotificationItem;
