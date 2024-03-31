import { Box, Flex, Text } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Image, KeyboardAvoidingView, NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import VerifyBg from '@/assets/images/verify-otp-bg.jpg';
import { ButtonPrimary, PrimaryLayout } from '@/components';
import { PATTERN, widthScreen } from '@/utils';
import InputVerify from './components/InputVerify';

const VerifyOTPScreen = () => {
  return (
    <PrimaryLayout
      titleScreen='Xác minh số điện thoại'
      containerClass='flex-1 bg-white'
      statusBarBackgroundColor='white'
    >
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1'>
          {/* NOTE: CAN YOU SPLIT COMPONENT FOR BELOW CODE IF OK IT WILL READABLE ? (NOT REQUIRED) */}
          <Box className='flex-1 px-4 w-screen'>
            <Box className='flex justify-center items-center mb-1'>
              <Image source={VerifyBg} width={widthScreen} resizeMode='contain' alt='Verify Bg' />
            </Box>
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

            <InputVerify />

            <Box className='flex flex-row justify-center items-center gap-1 mb-8'>
              <Text className='text-sm font-nunito-600'>Bạn chưa nhận được mã?</Text>
              <Text className='text-secondary font-nunito-700 text-[15px]'>Gửi lại</Text>
            </Box>
            <ButtonPrimary
              color='danger'
              title='Đăng nhập'
              containerClass='py-3'
              textClassName='uppercase font-nunito-700'
            />
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </PrimaryLayout>
  );
};

export default VerifyOTPScreen;
