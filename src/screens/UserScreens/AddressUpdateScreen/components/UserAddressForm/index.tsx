import { FormProvider } from 'react-hook-form';
import { VStack } from 'native-base';

import { PATTERN } from '@/utils';
import { useAddress } from '@/hooks';
import { UserAddressModel } from '@/models';
import { UserAddressFormProps } from './type';
import { FormController } from '@/components';

const { FormInput, FormSelect } = FormController;

const UserAddressForm = ({ formMethods, currentUserAddressData }: UserAddressFormProps) => {
  const { cityId, districtId } = currentUserAddressData || {};

  const { cityOptions, districtOptions, wardOptions } = useAddress({ cityId, districtId });

  return (
    <FormProvider {...formMethods}>
      <VStack space={3}>
        <FormInput<UserAddressModel>
          isRequired
          name='fullName'
          label='Họ và tên'
          rules={{
            required: 'Vui lòng nhập tên người nhận hàng!',
          }}
        />
        <FormInput<UserAddressModel>
          isRequired
          name='phoneNumber'
          label='Số điện thoại'
          rules={{
            required: 'Vui lòng nhập số điện thoại người nhận hàng!',
            pattern: {
              value: PATTERN.PHONE_NUMBER,
              message: 'Số điện thoại không hợp lệ!',
            },
          }}
        />
        <FormSelect<UserAddressModel>
          isRequired
          name='cityId'
          label='Tỉnh / Thành phố'
          options={cityOptions}
          rules={{
            required: 'Vui lòng chọn tỉnh, thành phố!',
          }}
        />
        <FormSelect<UserAddressModel>
          isRequired
          name='districtId'
          label='Quận / Huyện'
          isDisabled={!cityId}
          options={districtOptions}
          rules={{
            required: 'Vui lòng chọn quận, huyện!',
          }}
        />
        <FormSelect<UserAddressModel>
          isRequired
          name='wardId'
          label='Phường / Xã / Thị Trấn'
          isDisabled={!districtId}
          options={wardOptions}
          rules={{
            required: 'Vui lòng chọn phường, xã, thị trấn!',
          }}
        />
        <FormInput<UserAddressModel>
          isRequired
          name='location'
          label='Số nhà, tên đường'
          rules={{
            required: 'Vui lòng nhập số nhà tên đường!',
          }}
        />
      </VStack>
    </FormProvider>
  );
};

export default UserAddressForm;
