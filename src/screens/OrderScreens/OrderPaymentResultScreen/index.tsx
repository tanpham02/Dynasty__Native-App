import { PrimaryLayout } from '@/components';
import { Box, Text } from 'native-base';
import React from 'react';

const OrderPaymentResultScreen = () => {
  return (
    <PrimaryLayout titleScreen='Thông tin thanh toán'>
      <Box className='px-4'>
        <Text>OrderPaymentResultScreen</Text>
      </Box>
    </PrimaryLayout>
  );
};

export default OrderPaymentResultScreen;
