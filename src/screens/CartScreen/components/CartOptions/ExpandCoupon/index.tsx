import { Box, Text } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';

const ExpandCoupon = () => {
  return (
    <Pressable className='bg-third rounded-lg p-3 mb-3 flex flex-row' style={styles.shadowX}>
      <Svg.Offer width={28} height={28} className='text-secondary mr-2' />
      <Box className='flex flex-1'>
        <Text className='text-[15px] font-nunito-700 text-gray-10'>Sử dụng Coupon</Text>
        <Text className='text-xs font-nunito-500 text-gray-1'>Sử dụng coupon & xem các ưu đãi tuyệt vời có sẵn</Text>
      </Box>
      <Svg.AnglesRight width={18} height={18} className='text-black' />
    </Pressable>
  );
};

export default ExpandCoupon;
