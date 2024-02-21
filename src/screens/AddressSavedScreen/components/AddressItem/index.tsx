import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import styles from '@/styles';
import { PathName } from '@/constants';
import { NavigationUtils } from '@/utils';

const AddressItem = () => {
  const gotoUpdateAddressScreen = () =>
    NavigationUtils.navigate(PathName.PATH_SCREEN.ADDRESS_UPDATE_SCREEN);
  return (
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
  );
};

export default AddressItem;
