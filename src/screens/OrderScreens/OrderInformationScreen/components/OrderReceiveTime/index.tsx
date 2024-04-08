import { Box, Text } from 'native-base';
import { useFormContext } from 'react-hook-form';

import { OrderModel, OrderReceivingTime } from '@/models';
import { SelectReceiveTime, SelectReceiveTimeType } from '..';

const OrderReceiveTime = () => {
  const { setValue, watch } = useFormContext<OrderModel>();
  const orderReceivingTime = watch('orderReceivingTime');

  const handleChangeOrderReceiveTimeType = (type) => setValue('orderReceivingTime', type);

  return (
    <>
      <Text className='text-gray-10 font-nunito-700 text-base'>Chọn thời gian nhận hàng</Text>
      <SelectReceiveTimeType />
      {orderReceivingTime === OrderReceivingTime.SELECT_DATE_TIME && <SelectReceiveTime />}
    </>
  );
};

export default OrderReceiveTime;
