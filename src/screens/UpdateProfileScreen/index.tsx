import { Box, Input, Text } from 'native-base';

import { Svg } from '@/assets';
import { MyAvatar } from './components';
import { ButtonPrimary, PrimaryLayout } from '@/components';

const UpdateProfileScreen = () => {
  return (
    <PrimaryLayout titleScreen='Cập nhật tài khoản'>
      <Box className='px-3 space-y-4'>
        <MyAvatar />
        <Box className='bg-white rounded-lg p-4 space-y-4'>
          <Input
            borderRadius={8}
            placeholder='Họ và tên'
            value='Phạm Văn Tân'
            className='font-nunito-700'
            _focus={{
              backgroundColor: 'white',
            }}
          />
          <Box>
            <Input
              borderRadius={8}
              placeholder='Email'
              value='tanpham@gmail.com'
              className='font-nunito-700'
              keyboardType='email-address'
              _focus={{
                backgroundColor: 'white',
              }}
            />
            <Svg.CheckCircle width={20} height={20} className='absolute top-3 right-3 text-emerald-400' />
          </Box>
          <Box className='bg-white rounded-lg mt-3'>
            <Box className='bg-third absolute top-1 bottom-1 left-1 p-1 rounded-lg items-center flex-row z-1 w-[76px] justify-center'>
              <Svg.FlagVi width={24} height={24} />
              <Text className='font-nunito-700 text-[13px] ml-1'>+84</Text>
            </Box>
            <Box className='h-7 w-[1px] bg-red-200 absolute left-[86px] top-2 z-1' />
            <Input
              borderRadius={8}
              placeholder='Họ và tên'
              value='0984316437'
              keyboardType='numeric'
              className='font-nunito-700 pl-24'
              _focus={{
                backgroundColor: 'white',
              }}
            />
          </Box>
          <ButtonPrimary title='Lưu thay đổi' color='danger' containerClass='mt-4' />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default UpdateProfileScreen;
