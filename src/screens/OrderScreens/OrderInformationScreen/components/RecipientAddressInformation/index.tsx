import { FormController } from '@/components';
import { OrderModel } from '@/models';

const RecipientAddressInformation = () => {
  const { FormInput, FormSelect } = FormController;

  return (
    <>
      <FormSelect<OrderModel>
        label='Tỉnh/Thành'
        options={[
          { label: 'Thành phố Hồ Chí Minh', value: 1 },
          { label: 'Thành phố Hà Nội', value: 2 },
        ]}
        allowClear
        isRequired
        name='cityId'
        wrapperClassName='mb-3'
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
        wrapperClassName='mb-3'
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
        wrapperClassName='mb-3'
        rules={{
          required: 'Phường/Xã bắt buộc chọn',
        }}
      />

      <FormInput<OrderModel>
        label='Tên đường, số nhà'
        isRequired
        name='location'
        wrapperClassName='mb-3'
        rules={{
          required: 'Tên đường, số nhà bắt buộc nhập',
        }}
      />
    </>
  );
};

export default RecipientAddressInformation;
