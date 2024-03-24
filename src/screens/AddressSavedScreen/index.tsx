import { Box, Image, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';
import { PrimaryLayout } from '@/components';
import NoSavedAddressImage from '@/assets/images/address-saved.png';
import { AddressItem } from './components';

const AddressSavedScreen = () => {
  const gotoUpdateAddressScreen = () => NavigationUtils.navigate(PathName.PATH_SCREEN.ADDRESS_UPDATE_SCREEN);

  return (
    <PrimaryLayout titleScreen='Địa chỉ của tôi' containerClass='bg-white'>
      <Box className='items-center mx-8 flex-1'>
        <Image source={NoSavedAddressImage} className='w-48 h-48' alt='No Saved Address Image' />
        <Text className='font-nunito-700 text-black text-lg mt-4'>Chưa có địa chỉ nào được lưu</Text>
        <Text className='font-nunito-700 text-zinc-400 mt-2'>Thêm địa chỉ để chọn khi đặt hàng</Text>
        <TouchableOpacity
          onPress={gotoUpdateAddressScreen}
          className='items-center bg-secondary w-full max-w-[300px] py-2 px-4 rounded-lg mt-8'
          style={styles.shadowSecondary}
        >
          <Text className='font-nunito-700 text-white text-base'>Thêm địa chỉ</Text>
        </TouchableOpacity>
      </Box>
    </PrimaryLayout>
  );
};

export default AddressSavedScreen;
