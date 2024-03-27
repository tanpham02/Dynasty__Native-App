import { Actionsheet, Box, Button, Divider, Modal, Text } from 'native-base';
import React, { useState } from 'react';

import { ShippingMethodBottomSheetProps } from './type';
import { shippingMethodData } from './data';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import styles from '@/styles';
import { OrderTypes } from '@/models/order';
import { Svg } from '@/assets';
import { ButtonPrimary } from '@/components';
import { navigate } from '@/utils';
import { PATH_SCREEN } from '@/constants/pathName';

const ShippingMethodBottomSheet = ({ visible, onClose }: ShippingMethodBottomSheetProps) => {
  const [shippingMethodSelected, setShippingMethodSelected] = useState<OrderTypes>(OrderTypes.ORDER_DELIVERING);

  const handleSwitchShippingMethod = (type: OrderTypes) => setShippingMethodSelected(type);

  const goToOrderRecipientInformationScreen = () => {
    onClose();
    navigate(PATH_SCREEN.ORDER_RECIPIENT_INFORMATION_SCREEN);
  };

  return (
    <Actionsheet isOpen={visible} onClose={onClose}>
      <Actionsheet.Content className='px-6 max-w-full'>
        <Box w='100%' h={60} justifyContent='center' className='mb-3'>
          <Text className='text-lg font-nunito-700 text-gray-10 text-center'>Hình thức đặt hàng</Text>
        </Box>
        <Box w='100%' className='mb-3'>
          {shippingMethodData.map((shippingMethodItem) => (
            <Pressable
              key={shippingMethodItem.type}
              className={`relative flex-row justify-between items-center mb-4 border rounded-lg py-4 px-2 ${shippingMethodSelected === shippingMethodItem.type ? 'border-primary' : 'border-[#e1e1e1] '} min-h-[230px]`}
              //   style={styles.shadowX}
              onPress={() => handleSwitchShippingMethod(shippingMethodItem.type)}
            >
              <Image
                source={shippingMethodItem.image}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: 'contain',
                  marginRight: 12,
                }}
              />
              <Box className='flex-1'>
                <Text className='text-[15.5px] font-nunito-700 text-primary mb-2'>{shippingMethodItem.title}</Text>
                <Divider />
                <Box className='text-start mt-2'>
                  {OrderTypes.ORDER_DELIVERING === shippingMethodItem.type ? (
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
                      cho mỗi đơn đặt hàng qua Hotline 037280076 hoặc Website, bao gồm hoá đơn có các sản phẩm thuộc
                      chương trình khuyến mại.
                    </Text>
                  ) : (
                    <Box className='flex-col justify-center items-start'>
                      <Text className='text-[14.5px] font-nunito-400'>Nhận đơn hàng của bạn tại</Text>
                      <Text className='text-[14.5px] text-gray-10 font-nunito-700'>Nhà hàng Dynasty Pizza</Text>
                    </Box>
                  )}
                </Box>
              </Box>
              {shippingMethodItem.type === shippingMethodSelected && (
                <Box className='absolute top-1.5 right-1.5 bg-success p-1 rounded-full'>
                  <Svg.Checked width={12} height={12} className='text-white' />
                </Box>
              )}
            </Pressable>
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
