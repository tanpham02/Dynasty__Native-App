import { Box, Text } from 'native-base';

const InputVerifyNotificationContent = () => {
  return (
    <Box className='justify-center items-center gap-6'>
      <Text className='text-lg  uppercase font-nunito-700'>OTP Xác thực</Text>
      <Box className=''>
        <Text className='text-[13px] font-nunito-600 text-gray-400'>
          Chúng tôi đã gửi SMS đến số điện thoại
          <Text className='text-secondary font-nunito-700 text-[14px]'> 0372800762</Text>
        </Text>
        <Text className='text-[13px] font-nunito-600 text-gray-400'>
          Vui lòng kiểm tra hộp thư và điền OTP vào ô bên dưới
        </Text>
      </Box>
    </Box>
  );
};

export default InputVerifyNotificationContent;
