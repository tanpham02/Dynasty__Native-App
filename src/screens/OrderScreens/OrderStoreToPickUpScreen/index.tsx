import { Box } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';

import { PrimaryLayout } from '@/components';
import { FooterBarContent, FormFilter, StoreTabViews } from './components';
import { OrderStoreToPickUpScreenProps } from './type';
import { navigate } from '@/utils';
import { PATH_SCREEN } from '@/constants';
import { OrderModel } from '@/models';

const defaultValues: OrderModel = {
  orderAtStore: '1',
};

const OrderStoreToPickUpScreen = ({}: OrderStoreToPickUpScreenProps) => {
  const formMethods = useForm({ defaultValues });
  const { handleSubmit } = formMethods;

  const onSubmit = () => {
    navigate(PATH_SCREEN.ORDER_PAYMENT_RESULT_SCREEN);
  };

  return (
    <PrimaryLayout statusBarBackgroundColor='white' containerClass='bg-white' titleScreen='Chọn cửa hàng đến lấy'>
      <Box className='px-4 flex-1'>
        <FormProvider {...formMethods}>
          <FormFilter />
          <StoreTabViews />
        </FormProvider>
      </Box>

      <FooterBarContent submitHandler={handleSubmit(onSubmit)} />
    </PrimaryLayout>
  );
};

export default OrderStoreToPickUpScreen;
