import { Box, KeyboardAvoidingView } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryLayout } from '@/components';
import { FormFilter, StoreTabView } from './components';
import { OrderStoreToPickUpScreenProps } from './type';

const OrderStoreToPickUpScreen = ({}: OrderStoreToPickUpScreenProps) => {
  return (
    <PrimaryLayout statusBarBackgroundColor='white' titleScreen='Chọn cửa hàng đến lấy'>
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1'>
          <Box className='mt-1'>
            <FormFilter />
            <StoreTabView />
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </PrimaryLayout>
  );
};

export default OrderStoreToPickUpScreen;
