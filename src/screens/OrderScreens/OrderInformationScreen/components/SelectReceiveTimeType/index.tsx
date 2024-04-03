import { Box, Radio, Text, VStack } from 'native-base';
import React from 'react';

import { FormController } from '@/components';
import { OrderModel, OrderReceivingTime } from '@/models';
import { orderReceiveTimeData } from '../OrderReceiveTime/data';
import { SelectReceiveTimeTypeProps } from './type';

const SelectReceiveTimeType = ({ orderReceivingTime }: SelectReceiveTimeTypeProps) => {
  const { FormRadio } = FormController;
  return (
    <Box className='mt-2'>
      <FormRadio<OrderModel>
        fieldName='orderReceivingTime'
        name='orderReceivingTime'
        defaultValue={orderReceivingTime || OrderReceivingTime.NOW}
        wrapperClassName='mb-3'
        rules={{
          required: 'Tỉnh/Thành bắt buộc chọn',
        }}
      >
        <VStack space={3} className='pr-4'>
          {Object.keys(orderReceiveTimeData).map((item) => (
            <Radio colorScheme='success' value={item} size='sm'>
              <Text className='font-nunito-600'>
                {orderReceiveTimeData[item]}
                {/* If order status is ORDER_TO_PICK_UP then the text content is Tối thiểu 15 phút sau khi đặt hàng thành công */}
              </Text>
            </Radio>
          ))}
        </VStack>
      </FormRadio>
    </Box>
  );
};

export default SelectReceiveTimeType;
