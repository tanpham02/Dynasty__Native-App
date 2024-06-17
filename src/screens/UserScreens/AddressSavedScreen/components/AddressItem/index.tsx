import { Box, Text } from 'native-base';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { AddressItemProps } from './type';
import { useAddressData } from '@/hooks';

const AddressItem = ({
  phoneNumber,
  fullName,
  isDefault,
  onUpdate,
  cityId,
  districtId,
  wardId,
  location,
}: AddressItemProps) => {
  const { addressInfo } = useAddressData({
    cityId,
    districtId,
    wardId,
    location,
  });
  return (
    <Box className='bg-white w-[90%] mx-auto'>
      <TouchableOpacity
        style={styles.shadowX}
        onPress={onUpdate}
        className='border border-zinc-100 my-2 rounded-lg bg-white p-4'
      >
        {isDefault && (
          <Box className='border border-primary items-center absolute top-2 right-2 px-1.5 rounded'>
            <Text className='font-nunito-400 text-primary text-[10px]'>Mặc định</Text>
          </Box>
        )}
        <Text className='font-nunito-700 mt-2'>
          {fullName} | {phoneNumber || ''}
        </Text>
        <Text className='font-nunito-400 text-[13px] mt-1'>{addressInfo?.fullAddress}</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default memo(AddressItem);
