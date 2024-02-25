import { Box, Input, ScrollView, Select, Text } from 'native-base';
import { getProvinces, getDistricts, getWards } from 'vietnam-provinces';
import { useEffect, useMemo, useState } from 'react';

import { PrimaryLayout } from '@/components';
import styles from '@/styles';
import { TouchableOpacity } from 'react-native';

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
    if (location?.districtId) return getWards(location.districtId);

    return [];
  }, [location?.districtId]);

  return (
    <PrimaryLayout containerClass="bg-third">
      <ScrollView className="flex-1 -mt-4">
        <Box className="bg-white mx-4 flex-1 p-4 my-4 rounded-lg" style={styles.shadowX}>
          <Box className="mb-3">
            <Text className="font-nunito-700 text-xl text-zinc-500">Thêm địa chỉ</Text>
            <Text className="font-nunito-700 text-2xl">Giao hàng</Text>
            <Text className="font-nunito-500 text-zinc-500 text-sm">
              Thêm địa chỉ để chọn khi đặt hàng
            </Text>
          </Box>
          <Box style={styles.shadowX} className="bg-white rounded-lg mb-3">
            <Input
              borderRadius={8}
              borderWidth={0}
              placeholder="Họ và tên"
              className="font-nunito-700"
              _focus={{
                backgroundColor: 'white',
              }}
            />
          </Box>
          <Box style={styles.shadowX} className="bg-white rounded-lg mb-3">
            <Input
              borderRadius={8}
              borderWidth={0}
              placeholder="Số điện thoại"
              keyboardType="numeric"
              className="font-nunito-700"
              _focus={{
                backgroundColor: 'white',
              }}
            />
          </Box>
          <TouchableOpacity style={styles.shadowX} className="bg-white rounded-lg mb-3">
            <Select
              borderWidth={0}
              placeholder="Tỉnh, thành phố"
              className="font-nunito-700"
              selectedValue={location?.cityId}
              onValueChange={(cityId) => setLocation({ ...location, cityId })}
            >
              {cities?.map((city) => (
                <Select.Item key={city.code} label={city?.name} value={city?.code} />
              ))}
            </Select>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!location?.cityId}
            style={styles.shadowX}
            className="bg-white rounded-lg mb-3"
          >
            <Select
              isDisabled={!location?.cityId}
              borderWidth={0}
              placeholder="Quận, huyện"
              className="font-nunito-700"
              selectedValue={location?.districtId}
              onValueChange={(districtId) => setLocation({ ...location, districtId })}
            >
              {districts?.map((district) => (
                <Select.Item key={district.code} label={district?.name} value={district?.code} />
              ))}
            </Select>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!location?.districtId}
            style={styles.shadowX}
            className="bg-white rounded-lg mb-3"
          >
            <Select
              isDisabled={!location?.districtId}
              borderWidth={0}
              placeholder="Phường, xã, thị trấn"
              className="font-nunito-700"
              selectedValue={location?.wardId}
              onValueChange={(wardId) => setLocation({ ...location, wardId })}
            >
              {wards?.map((ward) => (
                <Select.Item key={ward.code} label={ward?.name} value={ward?.code} />
              ))}
            </Select>
          </TouchableOpacity>
          <Box style={styles.shadowX} className="bg-white rounded-lg mb-3">
            <Input
              borderRadius={8}
              borderWidth={0}
              placeholder="Số nhà, tên đường"
              className="font-nunito-700"
              _focus={{
                backgroundColor: 'white',
              }}
            />
          </Box>
          <TouchableOpacity
            className="bg-secondary py-2.5 px-4 items-center rounded-lg"
            style={styles.shadowSecondary}
          >
            <Text className="text-white font-nunito-700 text-sm">Lưu</Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default AddressUpdateScreen;
