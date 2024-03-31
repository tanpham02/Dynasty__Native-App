import { Box } from 'native-base';

import { FormUnController } from '@/components';

const FormFilter = () => {
  const { FormSelect } = FormUnController;

  return (
    <Box className='mt-2'>
      <FormSelect
        options={[
          {
            label: 'Thành phố Hồ Chí Minh',
            value: 1,
          },
          { label: 'Thành phố Hà Nội', value: 2 },
        ]}
        name='hours'
        // placeholder='Chọn Tỉnh/Thành'
        allowClear
        wrapperClassName='mb-3'
      />

      <FormSelect
        name='date'
        options={[
          { label: 'Quận Gò Vấp', value: 1 },
          { label: 'Quận Tân Bình', value: 2 },
        ]}
        // placeholder='Chọn Quận/Huyện'
        allowClear
        wrapperClassName='mb-3'
      />

      {/* <FormInput
        name='789'
        wrapperClassName='mb-3'
        accessibilityLabel='Nhập tên cửa hàng để tìm kiếm'
        placeholder='Nhập tên cửa hàng để tìm kiếm'
      /> */}
    </Box>
  );
};

export default FormFilter;
