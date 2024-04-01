import { Box, KeyboardAvoidingView, Text } from 'native-base';

import FormFilter from './components/FormFilter';
import StoreTabView from './components/StoreTabView';
import { OrderStoreToPickUpScreenProps } from './type';
import { PrimaryLayout } from '@/components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// NOTE: I KNOW YOU ARE TOO BUSY BUT WHEN YOU ARE COMPLETE UI, FUTURE OR ANYTHING PLEASE SCROLL INTO HEAD OF FILE AND SORTING IMPORT. IT WILL MAKE OUR PROJECT ARE CLEAN AND PROFESSIONAL 😁😁😁

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
