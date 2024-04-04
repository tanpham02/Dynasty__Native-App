import { Box } from 'native-base';
import { Image, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import VerifyBg from '@/assets/images/verify-otp-bg.jpg';
import { PrimaryLayout } from '@/components';
import { widthScreen } from '@/utils';
import { InputVerify, InputVerifyFooter, InputVerifyNotificationContent } from './components';

const VerifyOTPScreen = () => {
  return (
    <PrimaryLayout
      titleScreen='Xác minh số điện thoại'
      containerClass='flex-1 bg-white'
      statusBarBackgroundColor='white'
    >
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1'>
          <Box className='flex-1 px-4 w-screen'>
            <Box className='flex justify-center items-center mb-1'>
              <Image source={VerifyBg} width={widthScreen} resizeMode='contain' alt='Verify Bg' />
            </Box>
            <InputVerifyNotificationContent />
            <InputVerify />
            <InputVerifyFooter />
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </PrimaryLayout>
  );
};

export default VerifyOTPScreen;
