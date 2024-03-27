import { Box, Input, ScrollView, Select } from 'native-base';
import { useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { getDistricts, getProvinces, getWards } from 'vietnam-provinces';

import { ButtonPrimary, PrimaryLayout } from '@/components';

const AddressUpdateScreen = () => {
  const [location, setLocation] = useState({
    cityId: '',
    districtId: '',
    wardId: '',
  });

  useEffect(() => {
    setLocation({ ...location, districtId: '', wardId: '' });
  }, [location?.cityId]);

  const cities = useMemo(() => getProvinces(), []);

  const districts = useMemo(() => {
    if (location?.cityId) return getDistricts(location.cityId);

    return [];
  }, [location?.cityId]);

  const wards = useMemo(() => {
    if (location?.districtId) {
      return getWards(location.districtId);
    }
    return [];
  }, [location?.districtId]);

  return (
    <PrimaryLayout containerClass='bg-third' titleScreen='Thêm địa chỉ gia hàng'>
      <ScrollView className='flex-1 -mt-4'>
        <Box className='bg-white mx-4 flex-1 p-4 my-4 rounded-lg space-y-4'>
          <Input
            borderRadius={8}
            placeholder='Họ và tên'
            className='font-nunito-700'
            _focus={{
              backgroundColor: 'white',
            }}
          />
          <Box>
            <Input
              borderRadius={8}
              placeholder='Số điện thoại'
              keyboardType='numeric'
              className='font-nunito-700'
              _focus={{
                backgroundColor: 'white',
              }}
            />
          </Box>
          <TouchableOpacity>
            <Select
              placeholder='Tỉnh, thành phố'
              className='font-nunito-700'
              selectedValue={location?.cityId}
              onValueChange={(cityId) => setLocation({ ...location, cityId })}
            >
              {cities?.map((city) => <Select.Item key={city.code} label={city?.name} value={city?.code} />)}
            </Select>
          </TouchableOpacity>
          <TouchableOpacity disabled={!location?.cityId}>
            <Select
              isDisabled={!location?.cityId}
              placeholder='Quận, huyện'
              className='font-nunito-700'
              selectedValue={location?.districtId}
              onValueChange={(districtId) => setLocation({ ...location, districtId })}
            >
              {districts?.map((district) => (
                <Select.Item key={district.code} label={district?.name} value={district?.code} />
              ))}
            </Select>
          </TouchableOpacity>
          <TouchableOpacity disabled={!location?.districtId}>
            <Select
              isDisabled={!location?.districtId}
              placeholder='Phường, xã, thị trấn'
              className='font-nunito-700'
              selectedValue={location?.wardId}
              onValueChange={(wardId) => setLocation({ ...location, wardId })}
            >
              {wards?.map((ward) => <Select.Item key={ward.code} label={ward?.name} value={ward?.code} />)}
            </Select>
          </TouchableOpacity>
          <Box>
            <Input
              borderRadius={8}
              placeholder='Số nhà, tên đường'
              className='font-nunito-700'
              _focus={{
                backgroundColor: 'white',
              }}
            />
          </Box>
          <ButtonPrimary title='Lưu' color='danger' containerClass='mt-4' />
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default AddressUpdateScreen;
