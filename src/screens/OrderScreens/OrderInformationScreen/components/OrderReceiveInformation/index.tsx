import { RootState } from '@/redux';
import { Box, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';

import { OrderModel, OrderTypes } from '@/models';
import { RecipientAddressInformation, RecipientInformation } from '..';

const OrderRecipientInformation = () => {
  const orderInfo = useSelector<RootState, OrderModel>((state) => state.orderStore.order);

  return (
    <Box>
      <Text className='text-gray-10 font-nunito-700 text-base mt-1'>Thông tin nhận hàng</Text>
      <VStack space={3} className='mt-2'>
        <RecipientInformation />
        {orderInfo.orderType === OrderTypes.ORDER_DELIVERING && <RecipientAddressInformation />}
      </VStack>
    </Box>
  );
};

export default OrderRecipientInformation;
