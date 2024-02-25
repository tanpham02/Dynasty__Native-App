import { Box, ScrollView, Text } from 'native-base';

import styles from '@/styles';
import { PrimaryLayout } from '@/components';
import {
  Divider,
  OrderDetailHeader,
  OrderUserInfo,
  PaymentInfo,
  ProductOrdered,
} from './components';
import { TouchableOpacity } from 'react-native';

const OrderDetailScreen = () => {
  return (
    <PrimaryLayout titleScreen="Chi tiết đơn hàng">
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <Box style={styles.shadowX} className="bg-white m-3 mt-2 rounded-lg p-4">
          <OrderDetailHeader />
          <Divider />
          <OrderUserInfo />
          <Divider />
          <ProductOrdered />
          <Divider />
          <PaymentInfo />
          <Divider />
          <TouchableOpacity
            className="bg-primary items-center py-2 rounded-lg"
            style={styles.shadowPrimary}
          >
            <Text className="font-nunito-700 text-sm text-white">Mua lại</Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default OrderDetailScreen;
