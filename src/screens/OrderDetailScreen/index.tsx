import { Box, ScrollView } from 'native-base';

import styles from '@/styles';
import { ButtonPrimary, PrimaryLayout } from '@/components';
import { Divider, OrderDetailHeader, OrderUserInfo, PaymentInfo, ProductOrdered } from './components';

const OrderDetailScreen = () => {
  return (
    <PrimaryLayout titleScreen='Chi tiết đơn hàng'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box className='p-3 flex-1'>
          <Box style={styles.shadowX} className='bg-white mb-5 rounded-lg p-4 flex-1'>
            <OrderDetailHeader />
            <Divider />
            <OrderUserInfo />
            <Divider />
            <ProductOrdered />
            <Divider />
            <PaymentInfo />
            <ButtonPrimary title='Hủy đơn hàng' color='danger' containerClass='mt-2' />
          </Box>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default OrderDetailScreen;
