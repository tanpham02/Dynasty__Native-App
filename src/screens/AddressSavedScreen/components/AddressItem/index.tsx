import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { memo } from 'react';

import styles from '@/styles';
import { navigate } from '@/utils';
import { PATH_SCREEN } from '@/constants';
import { AddressItemProps } from './type';

const AddressItem = ({ phoneNumber, fullName, isDefault }: AddressItemProps) => {
  const gotoUpdateAddressScreen = () => navigate(PATH_SCREEN.ADDRESS_UPDATE_SCREEN);

  return (
    <Box className='bg-white w-[90%] mx-auto'>
      <TouchableOpacity
        style={styles.shadowX}
        onPress={gotoUpdateAddressScreen}
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
        <Text className='font-nunito-400 text-[13px] mt-1'>
          ấp Vĩnh Thạnh, xã Phước Vĩnh Đông, huyện Cần Giuộc, tỉnh Long An
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default memo(AddressItem);
