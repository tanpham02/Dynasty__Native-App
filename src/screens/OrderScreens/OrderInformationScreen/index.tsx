import React from 'react';

import { PrimaryLayout } from '@/components';
import OrderForm from './components/OrderForm';

const OrderRecipientInformationScreen = () => {
  return (
    <PrimaryLayout
      titleScreen='Thông tin đặt hàng - Đặt giao hàng'
      containerClass='bg-white'
      statusBarBackgroundColor='white'
    >
      <OrderForm />
    </PrimaryLayout>
  );
};

export default OrderRecipientInformationScreen;
