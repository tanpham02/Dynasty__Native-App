import { FormController } from '@/components';
import { OrderModel } from '@/models';
import { VStack } from 'native-base';
import { useFormContext } from 'react-hook-form';

const RecipientAddressInformation = () => {
  const { FormInput, FormSelect } = FormController;

  const { watch } = useFormContext();

  console.log('parent value: ', watch('cityId'));

  return (
    <VStack space={3}>
      <FormSelect<OrderModel>
        label='Tỉnh/Thành'
        options={[
          { label: 'Thành phố Hồ Chí Minh', value: '1' },
          { label: 'Thành phố Hà Nội', value: '2' },
        ]}
        allowClear
        isRequired
        name='cityId'
        rules={{
          required: 'Tỉnh/Thành bắt buộc chọn',
        }}
      />
      <FormSelect<OrderModel>
        label='Quận/Huyện'
        options={[
          { label: 'Quận Gò Vấp', value: 1 },
          { label: 'Quận Tân Bình', value: 2 },
        ]}
        isRequired
        name='districtId'
        rules={{
          required: 'Quận/Huyện bắt buộc chọn',
        }}
      />
      <FormSelect<OrderModel>
        label='Phường/Xã'
        options={[
          { label: 'Phường 1', value: 1 },
          { label: 'Phường 2', value: 2 },
        ]}
        isRequired
        name='wardId'
        rules={{
          required: 'Phường/Xã bắt buộc chọn',
        }}
      />

      <FormInput<OrderModel>
        label='Tên đường, số nhà'
        isRequired
        name='location'
        rules={{
          required: 'Tên đường, số nhà bắt buộc nhập',
        }}
      />
    </VStack>
  );
};

export default RecipientAddressInformation;
