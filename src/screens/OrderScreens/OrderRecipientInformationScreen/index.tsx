import { PrimaryLayout } from '@/components';
import { Box, Text } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const OrderRecipientInformationScreen = () => {
  return (
    <PrimaryLayout titleScreen='Thông tin người nhận'>
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1'>
          <Box>
            <Text>Hello</Text>
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </PrimaryLayout>
  );
};

export default OrderRecipientInformationScreen;
