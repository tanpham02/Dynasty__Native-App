import { Box, Text } from 'native-base';

import { ButtonPrimary } from '@/components';

const InputVerifyFooter = () => {
  return (
    <>
      <Box className='flex flex-row justify-center items-center gap-1 mb-8'>
        <Text className='text-sm font-nunito-600'>Bạn chưa nhận được mã?</Text>
        <Text className='text-secondary font-nunito-700 text-[15px]'>Gửi lại</Text>
      </Box>
      <ButtonPrimary color='danger' title='Đăng nhập' containerClass='py-3' textClassName='uppercase font-nunito-700' />
    </>
  );
};

export default InputVerifyFooter;
