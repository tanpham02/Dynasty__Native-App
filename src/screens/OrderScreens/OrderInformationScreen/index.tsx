import { useSelector } from 'react-redux';

import { PrimaryLayout } from '@/components';
import { TITLE_BY_ORDER_TYPES } from '@/constants/order';
import { OrderModel } from '@/models';
import { RootState } from '@/redux';
import OrderForm from './components/OrderForm';

const OrderRecipientInformationScreen = () => {
  const orderInfo = useSelector<RootState, OrderModel>((state) => state.orderStore.order);

  return (
    <PrimaryLayout
      titleScreen={`Thông tin đặt hàng ${'- ' + TITLE_BY_ORDER_TYPES[orderInfo?.orderType] ?? ''}`}
      containerClass='bg-white'
      statusBarBackgroundColor='white'
    >
      <OrderForm />
    </PrimaryLayout>
  );
};

export default OrderRecipientInformationScreen;
