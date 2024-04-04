import { FormController } from '@/components';
import { OrderModel } from '@/models';
import { PATTERN } from '@/utils';
import { VStack } from 'native-base';

const RecipientInformation = () => {
  const { FormInput } = FormController;

  return (
    <VStack space={3}>
      <FormInput<OrderModel>
        label='Họ và tên'
        isRequired
        name='fullName'
        className='capitalize'
        rules={{
          required: 'Họ và tên bắt buộc nhập',
        }}
      />
      <FormInput<OrderModel>
        label='Số điện thoại'
        isRequired
        name='phoneNumber'
        keyboardType='numeric'
        rules={{
          required: 'Số điện thoại bắt buộc nhập',
          pattern: {
            value: PATTERN.PHONE_NUMBER,
            message: 'Số điện thoại không hợp lệ',
          },
        }}
      />
    </VStack>
  );
};

export default RecipientInformation;
