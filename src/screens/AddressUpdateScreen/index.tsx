import { Box, Input, ScrollView } from 'native-base';

import { PrimaryLayout } from '@/components';
import styles from '@/styles';

const AddressUpdateScreen = () => {
  return (
    <PrimaryLayout containerClass="bg-third" titleScreen="Thêm địa chỉ giao hàng">
      <ScrollView className="flex-1">
        <Box className="bg-white mx-4 flex-1" style={styles.shadowX}>
          <Box style={styles.shadowX}>
            <Input placeholder="Họ và tên người nhận hàng" />
          </Box>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default AddressUpdateScreen;
