import { Actionsheet, Box, Divider, Text } from 'native-base';
import React, { useState } from 'react';

import { Svg } from '@/assets';
import { ButtonPrimary } from '@/components';
import { PATH_SCREEN } from '@/constants/pathName';
import { OrderTypes } from '@/models/order';
import { navigate } from '@/utils';
import { Image, Pressable } from 'react-native';
import { shippingMethodData } from './data';
import { ShippingMethodBottomSheetProps } from './type';
import ShippingMethodBottomSheetContent from './components/ShippingMethodBottomSheetContent';

const ShippingMethodBottomSheet = ({ visible, onClose }: ShippingMethodBottomSheetProps) => {
  const goToOrderRecipientInformationScreen = () => {
    onClose();
    navigate(PATH_SCREEN.ORDER_INFORMATION_SCREEN);
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
            <ShippingMethodBottomSheetContent {...shippingMethodItem} />
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
