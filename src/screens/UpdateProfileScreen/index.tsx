import { Box, Divider, Input, Text } from 'native-base';

import { PrimaryLayout } from '@/components';
import styles from '@/styles';
import { Svg } from '@/assets';
import { TouchableOpacity } from 'react-native';

const UpdateProfileScreen = () => {
  return (
    <PrimaryLayout>
      <Box className="bg-white mx-3 rounded-lg p-4" style={styles.shadowX}>
        <Text className="font-nunito-700 text-2xl text-zinc-600">Cập nhật</Text>
        <Text className="font-nunito-700 text-2xl mt-1">Thông tin tài khoản</Text>
        <Text className="font-nunito-500 text-[13px] text-zinc-500 mt-1">
          Vui lòng nhập thông tin của bạn
        </Text>
        <Box style={styles.shadowX} className="bg-white rounded-lg mt-3">
          <Input
            borderRadius={8}
            borderWidth={0}
            placeholder="Họ và tên"
            value="Phạm Văn Tân"
            className="font-nunito-700"
            _focus={{
              backgroundColor: 'white',
            }}
          />
        </Box>
        <Box style={styles.shadowX} className="bg-white rounded-lg mt-3">
          <Input
            borderRadius={8}
            borderWidth={0}
            placeholder="Email"
            value="tanpham@gmail.com"
            className="font-nunito-700"
            keyboardType="email-address"
            _focus={{
              backgroundColor: 'white',
            }}
          />
          <Svg.CheckCircle
            width={20}
            height={20}
            className="absolute top-3 right-3 text-emerald-400"
          />
        </Box>
        <Box style={styles.shadowX} className="bg-white rounded-lg mt-3">
          <Box className="bg-third absolute top-1 bottom-1 left-1 p-1 rounded-lg items-center flex-row z-1 w-[76px] justify-center">
            <Svg.FlagVi width={24} height={24} />
            <Text className="font-nunito-700 text-[13px] ml-1">+84</Text>
          </Box>
          <Box className="h-7 w-[1px] bg-red-200 absolute left-[86px] top-2 z-1" />
          <Input
            borderRadius={8}
            borderWidth={0}
            placeholder="Họ và tên"
            value="0984316437"
            keyboardType="numeric"
            className="font-nunito-700 pl-24"
            _focus={{
              backgroundColor: 'white',
            }}
          />
        </Box>
        <TouchableOpacity
          className="bg-secondary my-3 rounded-lg py-3 justify-center items-center"
          style={styles.shadowSecondary}
        >
          <Text className="text-white font-nunito-700">Lưu</Text>
        </TouchableOpacity>
      </Box>
    </PrimaryLayout>
  );
};

export default UpdateProfileScreen;
