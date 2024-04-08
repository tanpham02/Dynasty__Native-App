import { Box, KeyboardAvoidingView, VStack } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PATH_SCREEN } from '@/constants';
import { OrderModel, OrderTypes, OrderReceivingTime } from '@/models';
import { navigate } from '@/utils';
import { FooterBarContent, OrderReceiveInformation, OrderReceiveTime } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';

const defaultValues: OrderModel = {
  cityId: '1' as unknown as number,
  orderReceivingTime: OrderReceivingTime.NOW,
};

const OrderForm = () => {
  const orderInfo = useSelector<RootState, OrderModel>((state) => state.orderStore.order);
  const formMethods = useForm<OrderModel>({ defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const submitHandler = (data: OrderModel) => {
    if (orderInfo.orderType === OrderTypes.ORDER_TO_PICK_UP) {
      navigate(PATH_SCREEN.ORDER_STORE_TO_PICK_UP_SCREEN);
    } else {
      navigate(PATH_SCREEN.ORDER_PAYMENT_RESULT_SCREEN);
    }
  };

  return (
    <>
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1' showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
          <Box className='px-4 flex-1'>
            <FormProvider {...formMethods}>
              <VStack space={6}>
                <OrderReceiveInformation />
                <OrderReceiveTime />
              </VStack>
            </FormProvider>
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>

      <FooterBarContent submitHandler={handleSubmit(submitHandler)} />
    </>
  );
};

export default OrderForm;
