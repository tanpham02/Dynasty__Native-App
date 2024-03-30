import { UserModel } from '@/models';
import { Box, KeyboardAvoidingView, VStack } from 'native-base';
import { FormProvider, useForm } from 'react-hook-form';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OrderRecipientInformation from '../OrderReceiveInformation';
import OrderReceiveTime from '../OrderReceiveTime';
import { ButtonPrimary, FooterBar } from '@/components';
import FooterBarContent from '../FooterBarContent';
import StoreToPickUp from '../StoreToPickUp';

const OrderForm = () => {
  const formMethods = useForm<UserModel>();
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const submitHandler = () => {};

  return (
    <>
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1' showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
          <Box className='px-4 flex-1'>
            <FormProvider {...formMethods}>
              <VStack space={4} className='mt-4'>
                <OrderRecipientInformation />
                <OrderReceiveTime />

                {/* Only show when order status is ORDER_TO_PICK_UP */}
                <StoreToPickUp/>
              </VStack>
            </FormProvider>
          </Box>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
      <FooterBarContent handleSubmit={handleSubmit} submitHandler={submitHandler} />
    </>
  );
};

export default OrderForm;
