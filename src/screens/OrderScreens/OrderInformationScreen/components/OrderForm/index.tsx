import { OrderModel, UserModel } from '@/models';
import { Box, KeyboardAvoidingView, VStack } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FooterBarContent from '../FooterBarContent';
import OrderRecipientInformation from '../OrderReceiveInformation';
import OrderReceiveTime from '../OrderReceiveTime';
import { navigate } from '@/utils';
import { PATH_SCREEN } from '@/constants';

const OrderForm = () => {
  const formMethods = useForm<UserModel>();
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
              <VStack space={4} className='mt-4'>
                <OrderRecipientInformation />
                <OrderReceiveTime />
              </VStack>
            </FormProvider>
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
      {/* PASS TWO PROPS FOR BELOW COMPONENT IS UNNECESSARY. USE ONLY ONE PROPS FOR BOTH ex: onSubmit or any */}
      <FooterBarContent handleSubmit={handleSubmit} submitHandler={submitHandler} />
    </>
  );
};

export default OrderForm;
