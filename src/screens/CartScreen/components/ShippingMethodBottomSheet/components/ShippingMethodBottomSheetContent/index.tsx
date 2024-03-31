import { OrderTypes } from '@/models/orderModel';
import { Box, Divider, Image, Text } from 'native-base';
import { Pressable } from 'react-native';
import { ShippingMethodBottomSheetContentProps } from './type';
import { useState } from 'react';
import { Svg } from '@/assets';

const ShippingMethodBottomSheetContent = ({
  image,
  title,
  type,
  shippingMethodSelected,
  setShippingMethodSelected,
}: ShippingMethodBottomSheetContentProps) => {
  const handleSwitchShippingMethod = (type: OrderTypes) => {
    setShippingMethodSelected(type);
  };

  return (
    <Pressable
      key={type}
      className={`relative flex-row justify-between items-center mb-4 border rounded-lg py-4 px-2 ${shippingMethodSelected === type ? 'border-primary' : 'border-[#e1e1e1] '} min-h-[230px]`}
      onPress={() => handleSwitchShippingMethod(type)}
    >
      <Image
        source={image}
        style={{
          width: 80,
          height: 80,
          objectFit: 'contain',
          marginRight: 12,
        }}
      />
      <Box className='flex-1'>
        <Text className='text-[15.5px] font-nunito-700 text-primary mb-2'>{title}</Text>
        <Divider />
        <Box className='text-start mt-2'>
          {OrderTypes.ORDER_DELIVERING === type ? (
            <Text className='text-[14.3px] font-nunito-400'>
              Giao hàng tận nơi với đơn hàng{' '}
              <Text>
                {' '}
                <Text className='text-secondary font-nunito-600'>thực thanh toán</Text>
              </Text>{' '}
              từ{' '}
              <Text>
                {' '}
                <Text className='text-secondary font-nunito-600'>100.000đ</Text>
              </Text>
              . Phụ thu phí giao hàng từ{' '}
              <Text>
                {' '}
                <Text className='text-secondary font-nunito-600'>25,000đ</Text>
              </Text>{' '}
              cho mỗi đơn đặt hàng qua Hotline 037280076 hoặc Website, bao gồm hoá đơn có các sản phẩm thuộc chương
              trình khuyến mại.
            </Text>
          ) : (
            <Box className='flex-col justify-center items-start'>
              <Text className='text-[14.5px] font-nunito-400'>Nhận đơn hàng của bạn tại</Text>
              <Text className='text-[14.5px] text-gray-10 font-nunito-700'>Nhà hàng Dynasty Pizza</Text>
            </Box>
          )}
        </Box>
      </Box>
      {type === shippingMethodSelected && (
        <Box className='absolute top-1.5 right-1.5 bg-success p-1 rounded-full'>
          <Svg.Checked width={12} height={12} className='text-white' />
        </Box>
      )}
    </Pressable>
  );
};

export default ShippingMethodBottomSheetContent;
