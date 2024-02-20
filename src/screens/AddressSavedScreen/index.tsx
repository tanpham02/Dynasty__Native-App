import { Box, Image, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';
import { PrimaryLayout } from '@/components';
import NoSavedAddressImage from '@/assets/images/address-saved.png';

const AddressSavedScreen = () => {
  const gotoUpdateAddressScreen = () =>
    NavigationUtils.navigate(PathName.PATH_SCREEN.ADDRESS_UPDATE_SCREEN);

  return (
    <PrimaryLayout titleScreen="Địa chỉ của tôi" containerClass="bg-white">
      <Box className="items-center mx-8 flex-1">
        <Image source={NoSavedAddressImage} className="w-48 h-48" />
        <Text className="font-nunito-700 text-black text-lg mt-4">
          Chưa có địa chỉ nào được lưu
        </Text>
        <Text className="font-nunito-700 text-zinc-400 mt-2">
          Thêm địa chỉ để chọn khi đặt hàng
        </Text>
        <TouchableOpacity
          onPress={gotoUpdateAddressScreen}
          className="items-center bg-secondary w-full max-w-[300px] py-2 px-4 rounded-lg mt-8"
          style={styles.shadowSecondary}
        >
          <Text className="font-nunito-700 text-white text-base">Thêm địa chỉ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={gotoUpdateAddressScreen}
          className="border border-zinc-100 w-full mt-4 rounded-lg bg-white p-4"
          style={styles.shadowX}
        >
          <Box className="border border-primary items-center absolute top-2 right-2 px-1.5 rounded">
            <Text className="font-nunito-400 text-primary text-[10px]">Mặc định</Text>
          </Box>
          <Text className="font-nunito-700 mt-2">Võ Quan Hạ | 0984316437</Text>
          <Text className="font-nunito-400 text-[13px] mt-1">
            ấp Vĩnh Thạnh, xã Phước Vĩnh Đông, huyện Cần Giuộc, tỉnh Long An
          </Text>
        </TouchableOpacity>
      </Box>
    </PrimaryLayout>
  );
};

export default AddressSavedScreen;
