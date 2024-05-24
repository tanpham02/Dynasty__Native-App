import { Text, VStack } from 'native-base';
import { useFormContext } from 'react-hook-form';

import { FormController } from '@/components';
import { OrderModel, PaymentMethods } from '@/models';
import PaymentMethodItem from '../PaymentMethodItem';
import { paymentMethods } from './data';

const { FormRadio } = FormController;

const PaymentMethodComponent = () => {
  const { setValue } = useFormContext<OrderModel>();

  const handleChangePaymentMethod = (paymentMethod: PaymentMethods) => setValue('paymentMethod', paymentMethod);

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

export default PaymentMethodComponent;
