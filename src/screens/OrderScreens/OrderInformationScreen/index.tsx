import { useSelector } from 'react-redux';

import { PrimaryLayout } from '@/components';
import { TITLE_BY_ORDER_TYPES } from '@/constants/order';
import { OrderModel } from '@/models';
import { RootState } from '@/redux';
import OrderForm from './components/OrderForm';

//FIXME: ONLY HAVE ONE components folder is allow in this folder. You are create too much it
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
