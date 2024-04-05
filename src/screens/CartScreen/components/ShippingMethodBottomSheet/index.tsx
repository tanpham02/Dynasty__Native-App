import { Actionsheet, Box, Text } from 'native-base';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonPrimary } from '@/components';
import { PATH_SCREEN } from '@/constants';
import { OrderModel, OrderTypes } from '@/models';
import { AppDispatch, setOrder } from '@/redux';
import { navigate } from '@/utils';
import ShippingMethodBottomSheetContent from '../ShippingMethodBottomSheetContent';
import { shippingMethodData } from './data';
import { ShippingMethodBottomSheetProps } from './type';

const ShippingMethodBottomSheet = ({ visible, onClose }: ShippingMethodBottomSheetProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [shippingMethodSelected, setShippingMethodSelected] = useState<OrderTypes>(OrderTypes.ORDER_DELIVERING);

  const goToOrderRecipientInformationScreen = () => {
    onClose();
    navigate(PATH_SCREEN.ORDER_INFORMATION_SCREEN);

    const payload: OrderModel = { orderType: shippingMethodSelected };
    dispatch(setOrder(payload));
  };

  return (
    <Actionsheet isOpen={visible} onClose={onClose}>
      <Actionsheet.Content className='px-6 max-w-full'>
        {/* BUG: YOUR CODE HAVE AN ERROR UI IN ANDROID PLATFORM */}
        <Box w='100%' h={60} justifyContent='center' className='mb-3'>
          <Text className='text-lg font-nunito-700 text-gray-10 text-center'>Hình thức đặt hàng</Text>
        </Box>
        <Box w='100%' className='mb-3'>
          {shippingMethodData.map((shippingMethodItem) => (
            <ShippingMethodBottomSheetContent
              {...shippingMethodItem}
              isActive={shippingMethodSelected === shippingMethodItem.type}
              onSelect={() => setShippingMethodSelected(shippingMethodItem.type)}
            />
          ))}
        </Box>

        <Box width='100%' className='flex-row justify-between items-center'>
          <ButtonPrimary
            title='Đóng'
            containerClass='w-[48%] bg-zinc-100 '
            textClassName='text-gray-10'
            onPress={onClose}
          />

          <ButtonPrimary
            title='Tiếp tục'
            containerClass='w-[48%] bg-secondary'
            onPress={goToOrderRecipientInformationScreen}
          />
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ShippingMethodBottomSheet;
