import { Box } from 'native-base';

import { UserModel } from '@/models';
import { PATTERN } from '@/utils';
import { FormDatePicker, FormInput } from '@/components';

const UpdateForm = () => {
  return (
    <>
      <FormInput<UserModel>
        isRequired
        name='fullName'
        label='Họ và tên'
        wrapperClassName='mb-2'
        rules={{
          required: 'Vui lòng nhập họ và tên của bạn!',
        }}
      />
      <FormInput<UserModel>
        isRequired
        name='phoneNumber'
        label='Số điện thoại'
        keyboardType='number-pad'
        wrapperClassName='mb-2'
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
        wrapperClassName='mb-2'
        rules={{
          pattern: {
            value: PATTERN.EMAIL,
            message: 'Email không hợp lệ!',
          },
        }}
      />
      <FormDatePicker<UserModel> name='birthday' label='Ngày sinh' placeholder='DD / MM / YYYY' />
    </>
  );
};

export default UpdateForm;
