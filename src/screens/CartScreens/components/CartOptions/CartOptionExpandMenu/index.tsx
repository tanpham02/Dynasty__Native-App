import { Box, Text } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';

const CartOptionExpandMenu = () => {
  return (
    <Pressable className='bg-third rounded-lg p-3 mb-3 flex flex-row' style={styles.shadowX}>
      <Svg.FoodMenu width={28} height={28} className='text-black mr-2' />
      <Box className='flex flex-1'>
        <Text className='text-[15px] font-nunito-700 text-gray-10'>Khám phá Menu</Text>
        <Text className='text-xs font-nunito-500 text-gray-1'>Thêm sản phẩm vào giỏ hàng của bạn</Text>
      </Box>
      <Svg.AnglesRight width={18} height={18} className='text-black' />
    </Pressable>
  );
};

export default CartOptionExpandMenu;
