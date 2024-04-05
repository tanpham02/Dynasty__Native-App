import { Box, KeyboardAvoidingView } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryLayout } from '@/components';
import { FooterBarContent, FormFilter, StoreNearestYourLocationList, StoreTabViews } from './components';
import { OrderStoreToPickUpScreenProps } from './type';

const OrderStoreToPickUpScreen = ({}: OrderStoreToPickUpScreenProps) => {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const onSubmit = () => {};

  return (
    <PrimaryLayout statusBarBackgroundColor='white' containerClass='bg-white' titleScreen='Chọn cửa hàng đến lấy'>
      <Box className='mt-1 px-4 flex-1'>
        <FormProvider {...formMethods}>
          <FormFilter />
          <StoreTabViews />
          {/* <StoreNearestYourLocationList /> */}
        </FormProvider>
      </Box>

      <FooterBarContent submitHandler={handleSubmit(onSubmit)} />
    </PrimaryLayout>
  );
};

export default OrderStoreToPickUpScreen;
