import { Box, KeyboardAvoidingView, VStack } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PATH_SCREEN } from '@/constants';
import { OrderModel, UserModel } from '@/models';
import { navigate } from '@/utils';
import { FooterBarContent, OrderReceiveInformation, OrderReceiveTime } from '..';

const defaultValues: OrderModel = {
  cityId: '1',
};

const OrderForm = () => {
  const formMethods = useForm<OrderModel>({ defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const submitHandler = (data: OrderModel) => {
    navigate(PATH_SCREEN.ORDER_STORE_TO_PICK_UP_SCREEN);
  };

  return (
    <>
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1' showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
          <Box className='px-4 flex-1'>
            <FormProvider {...formMethods}>
              <VStack space={5} className='mt-4'>
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
