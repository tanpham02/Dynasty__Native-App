import { Box, Radio, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';

import { FormController } from '@/components';
import { OrderModel, OrderReceivingTime } from '@/models';
import { RootState } from '@/redux';
import { Pressable } from 'react-native';
import { orderReceiveTimeData } from '../OrderReceiveTime/data';
import { SelectReceiveTimeTypeProps } from './type';
const { FormRadio } = FormController;

const SelectReceiveTimeType = ({}: SelectReceiveTimeTypeProps) => {
  const orderInfo = useSelector<RootState, OrderModel>((state) => state.orderStore.order);

  return (
    <Box className='mt-2.5 mb-2'>
      <FormRadio<OrderModel>
        fieldName='orderReceivingTime'
        name='orderReceivingTime'
        wrapperClassName='mb-3'
        rules={{
          required: 'Tỉnh/Thành bắt buộc chọn',
        }}
      >
        <VStack space={3} className='pr-4'>
          {Object.keys(orderReceiveTimeData).map((type: OrderReceivingTime) => (
            <Pressable className='flex-row items-start justify-start'>
              <Radio value={type} colorScheme='success' size='sm'>
                <Text className='font-nunito-600'>{orderReceiveTimeData[type].label(orderInfo.orderType)}</Text>
              </Radio>
            </Pressable>
          ))}
        </VStack>
      </FormRadio>
    </Box>
  );
};

export default SelectReceiveTimeType;
