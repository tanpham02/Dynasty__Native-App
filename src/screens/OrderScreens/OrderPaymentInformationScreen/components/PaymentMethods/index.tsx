import { FormController } from '@/components';
import { OrderModel, PaymentMethod } from '@/models';
import { Box, Radio, Text, VStack } from 'native-base';
import { paymentMethods } from './data';
import { useFormContext } from 'react-hook-form';
import { Pressable } from 'react-native';
import PaymentMethodItem from '../PaymentMethodItem';

const { FormRadio } = FormController;

const PaymentMethods = () => {
  const { setValue } = useFormContext<OrderModel>();

  const handleChangePaymentMethod = (paymentMethod: PaymentMethod) => setValue('paymentMethod', paymentMethod);

  return (
    <>
      <Text className='text-gray-10 font-nunito-700 text-base'>Phương thức thanh toán</Text>
      <VStack space={3} className='mt-2.5'>
        <FormRadio<OrderModel> name='paymentMethod' fieldName='paymentMethod'>
          {paymentMethods.map((method) => (
            <PaymentMethodItem {...method} onPressPaymentMethodItem={() => handleChangePaymentMethod(method.type)} />
          ))}
        </FormRadio>
      </VStack>
    </>
  );
};

export default PaymentMethods;
