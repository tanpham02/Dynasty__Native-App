import { Box } from 'native-base';
import { useState } from 'react';

import { FormUnController } from '@/components';

const FormFilter = () => {
  const { FormSelect, FormInput } = FormUnController;

  const [filters, setFilters] = useState<{
    searchText?: string;
    cityId?: string;
    districtId?: string;
  }>({});

  const handleChangeFilters = (value) => {
    setFilters({
      cityId: value,
    });
  };

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
        onChange={handleChangeFilters}
        value={filters.cityId}
        name='cityId'
        placeholder='Chọn Tỉnh/Thành'
        allowClear
        wrapperClassName='mb-3'
      />

      <FormSelect
        name='districtId'
        options={[
          { label: 'Quận Gò Vấp', value: 1 },
          { label: 'Quận Tân Bình', value: 2 },
        ]}
        value={filters.districtId}
        placeholder='Chọn Quận/Huyện'
        allowClear
        wrapperClassName='mb-3'
      />

      <FormInput
        name='name'
        wrapperClassName='mb-3'
        accessibilityLabel='Nhập tên cửa hàng để tìm kiếm'
        placeholder='Nhập tên cửa hàng để tìm kiếm'
      />
    </Box>
  );
};

export default FormFilter;
