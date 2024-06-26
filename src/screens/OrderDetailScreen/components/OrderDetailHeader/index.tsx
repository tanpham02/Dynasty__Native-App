import { Box, Text } from 'native-base';

import { formatDate, DATE_FORMAT_HHMMDDMMYYYY } from '@/utils';
import { OrderStatusTag } from '@/components';

const OrderDetailHeader = () => {
  return (
    <>
      <OrderStatusTag />
      <Box>
        <Text className='text-xs font-nunito-400 text-zinc-600'>
          Mã đơn hàng: <Text className='font-nunito-700 text-zinc-800'>#24335</Text>
        </Text>
        <Text className='text-xs font-nunito-400 text-zinc-600'>
          Thời gian đặt:{' '}
          <Text className='font-nunito-700 text-zinc-800'>{formatDate(new Date(), DATE_FORMAT_HHMMDDMMYYYY)}</Text>
        </Text>
      </Box>
    </>
  );
};

export default OrderDetailHeader;
