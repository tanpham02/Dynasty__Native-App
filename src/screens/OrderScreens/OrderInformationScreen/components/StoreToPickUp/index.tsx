import { Box, Text } from 'native-base';
import { StoreToPickUpProps } from './type';
import { FormInput, FormSelect } from '@/components';

const StoreToPickUp = ({}: StoreToPickUpProps) => {
  return (
    <Box className='mt-1'>
      <Text className='text-gray-10 font-nunito-700 text-base mt-1'>Chọn cửa hàng đến lấy</Text>
      <Box className='mt-2'>
        <FormSelect
          options={[
            {
              label: 'Thành phố Hồ Chí Minh',
              value: 1,
            },
            { label: 'Thành phố Hà Nội', value: 2 },
          ]}
          accessibilityLabel='Chọn Tỉnh/Thành'
          placeholder='Chọn Tỉnh/Thành'
          allowClear
          name='123'
          wrapperClassName='mb-3'
        />
        <FormSelect
          options={[
            { label: 'Quận Gò Vấp', value: 1 },
            { label: 'Quận Tân Bình', value: 2 },
          ]}
          accessibilityLabel='Chọn Quận/Huyện'
          placeholder='Chọn Quận/Huyện'
          allowClear
          name='456'
          wrapperClassName='mb-3'
        />

        <FormInput
          name='789'
          wrapperClassName='mb-3'
          accessibilityLabel='Nhập tên cửa hàng để tìm kiếm'
          placeholder='Nhập tên cửa hàng để tìm kiếm'
        />
      </Box>
    </Box>
  );
};

export default StoreToPickUp;
