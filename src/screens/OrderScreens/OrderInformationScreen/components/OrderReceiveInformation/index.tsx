import { FormInput, FormSelect } from '@/components';
import { UserModel } from '@/models';
import { PATTERN } from '@/utils';
import { Box, Divider, Text } from 'native-base';
import React from 'react';

const OrderRecipientInformation = () => {
  return (
    <Box>
      <Text className='text-gray-10 font-nunito-700 text-base mt-1'>Thông tin nhận hàng</Text>
      <Box className='mt-2'>
        <FormInput<UserModel>
          label='Họ và tên'
          isRequired
          name='fullName'
          wrapperClassName='mb-3'
          className='capitalize'
          rules={{
            required: 'Họ và tên bắt buộc nhập',
          }}
        />
        <FormInput<UserModel>
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
        <FormSelect<UserModel>
          label='Tỉnh/Thành'
          options={[
            { label: 'Thành phố Hồ Chí Minh', value: 1 },
            { label: 'Thành phố Hà Nội', value: 2 },
          ]}
          allowClear
          isRequired
          name='status'
          wrapperClassName='mb-3'
          rules={{
            required: 'Tỉnh/Thành bắt buộc chọn',
          }}
        />
        <FormSelect<UserModel>
          label='Quận/Huyện'
          options={[
            { label: 'Quận Gò Vấp', value: 1 },
            { label: 'Quận Tân Bình', value: 2 },
          ]}
          isRequired
          name='email'
          wrapperClassName='mb-3'
          rules={{
            required: 'Quận/Huyện bắt buộc chọn',
          }}
        />
        <FormSelect<UserModel>
          label='Phường/Xã'
          options={[
            { label: 'Phường 1', value: 1 },
            { label: 'Phường 2', value: 2 },
          ]}
          isRequired
          name='password'
          wrapperClassName='mb-3'
          rules={{
            required: 'Phường/Xã bắt buộc chọn',
          }}
        />

        <FormInput<UserModel>
          label='Tên đường'
          isRequired
          name='otp'
          wrapperClassName='mb-3'
          rules={{
            required: 'Tên đường bắt buộc nhập',
          }}
        />
        <FormInput<UserModel>
          label='Số nhà'
          isRequired
          name='birthday'
          wrapperClassName='mb-3'
          rules={{
            required: 'Số nhà bắt buộc nhập',
          }}
        />
      </Box>
    </Box>
  );
};

export default OrderRecipientInformation;
