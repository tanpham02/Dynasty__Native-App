import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Text } from 'native-base';

import { OrderModel, OrderReceivingTime } from '@/models';
import SelectReceiveTime from '../SelectReceiveTime';
import SelectReceiveTimeType from '../SelectReceiveTimeType';

const OrderReceiveTime = () => {
  const { watch } = useFormContext<OrderModel>();
  const orderReceivingTime = watch('orderReceivingTime');

  return (
    <Box>
      <Text className='text-gray-10 font-nunito-700 text-base'>Chọn thời gian nhận hàng</Text>

      <SelectReceiveTimeType orderReceivingTime={orderReceivingTime} />
      {orderReceivingTime === OrderReceivingTime.SELECT_DATE_TIME && <SelectReceiveTime />}
    </Box>
  );
};

export default OrderReceiveTime;
