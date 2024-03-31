import { RootState } from '@/redux';
import { Box, Text } from 'native-base';
import { useSelector } from 'react-redux';

import { OrderModel, OrderTypes } from '@/models';
import RecipientAddressInformation from './components/RecipientAddressInformation';
import RecipientInformation from './components/RecipientInformation';

const OrderRecipientInformation = () => {
  const orderInfo = useSelector<RootState, OrderModel>((state) => state.orderStore.order);

  return (
    <Box>
      <Text className='text-gray-10 font-nunito-700 text-base mt-1'>Thông tin nhận hàng</Text>
      <Box className='mt-2'>
        <RecipientInformation />
        {orderInfo.orderType === OrderTypes.ORDER_DELIVERING && <RecipientAddressInformation />}
      </Box>
    </Box>
  );
};

export default OrderRecipientInformation;
