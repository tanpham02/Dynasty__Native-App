import { RootState } from '@/redux';
import { Box, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';

import { FormUnController } from '@/components';
import { OrderModel, OrderTypes } from '@/models';
import { RecipientAddressInformation, RecipientInformation, AccumulateAddressSelect } from '..';

const { FormSelect } = FormUnController;

const OrderRecipientInformation = () => {
  const orderInfo = useSelector<RootState, OrderModel>((state) => state.orderStore.order);

  return (
    <>
      <Text className='text-gray-10 font-nunito-700 text-base '>Thông tin nhận hàng</Text>
      <VStack space={3} className='mt-2.5'>
        {/* <FormSelect name='' options={accumulateAddressOptions} /> */}
        <AccumulateAddressSelect />
        <RecipientInformation />
        {orderInfo.orderType === OrderTypes.ORDER_DELIVERING && <RecipientAddressInformation />}
      </VStack>
    </>
  );
};

export default OrderRecipientInformation;
