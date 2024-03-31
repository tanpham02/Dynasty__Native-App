import { FormController } from '@/components';
import { OrderModel } from '@/models';
import { PATTERN } from '@/utils';

const RecipientInformation = () => {
  const { FormInput } = FormController;

  return (
    <>
      <FormInput<OrderModel>
        label='Họ và tên'
        isRequired
        name='fullName'
        wrapperClassName='mb-3'
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
        wrapperClassName='mb-3'
        rules={{
          required: 'Số điện thoại bắt buộc nhập',
          pattern: {
            value: PATTERN.PHONE_NUMBER,
            message: 'Số điện thoại không hợp lệ',
          },
        }}
      />
    </>
  );
};

export default RecipientInformation;
