import { VStack } from 'native-base';

import { FormController } from '@/components';
import { UserModel } from '@/models';
import { PATTERN } from '@/utils';

const { FormInput, FormDatePicker } = FormController;

const UpdateForm = () => {
  return (
    <VStack space={3}>
      <FormInput<UserModel>
        isRequired
        name='fullName'
        label='Họ và tên'
        rules={{
          required: 'Vui lòng nhập họ và tên của bạn!',
        }}
      />
      <FormInput<UserModel>
        isRequired
        name='phoneNumber'
        label='Số điện thoại'
        keyboardType='number-pad'
        rules={{
          required: 'Vui lòng nhập số điện thoại của bạn!',
          pattern: {
            value: PATTERN.PHONE_NUMBER,
            message: 'Số điện thoại không hợp lệ!',
          },
        }}
      />
      <FormInput<UserModel>
        name='email'
        label='Email'
        rules={{
          pattern: {
            value: PATTERN.EMAIL,
            message: 'Email không hợp lệ!',
          },
        }}
      />
      <FormDatePicker<UserModel> name='birthday' label='Ngày sinh' placeholder='DD / MM / YYYY' />
    </VStack>
  );
};

export default UpdateForm;
