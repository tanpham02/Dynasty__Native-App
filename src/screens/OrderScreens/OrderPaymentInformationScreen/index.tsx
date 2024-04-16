import { Divider, VStack } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';

import { PrimaryLayout } from '@/layouts';
import { OrderModel, PaymentMethod } from '@/models';
import { ScrollView } from 'react-native';
import { CustomerInformation, FooterBarContent, OrderProducts, PaymentMethods, TotalPayment } from './components';
import { navigate } from '@/utils';
import { PATH_SCREEN } from '@/constants';

const defaultValues: OrderModel = { paymentMethod: PaymentMethod.PAYMENT_ON_DELIVERY };

const OrderPaymentInformationScreen = () => {
  const formMethods = useForm({ defaultValues });

  const { handleSubmit } = formMethods;

  const submitHandler = () => {
    navigate(PATH_SCREEN.ORDER_CONFIRMED);
  };

  return (
    <PrimaryLayout titleScreen='Thông tin đơn hàng' containerClass='bg-white'>
      <ScrollView horizontal={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false} className='flex-1'>
        <FormProvider {...formMethods}>
          <VStack space={5} className='px-4'>
            <CustomerInformation />
            <PaymentMethods />
            <OrderProducts />
            <Divider />
            <TotalPayment />
          </VStack>
        </FormProvider>
      </ScrollView>
      <FooterBarContent submitHandler={handleSubmit(submitHandler)} />
    </PrimaryLayout>
  );
};

export default OrderPaymentInformationScreen;
