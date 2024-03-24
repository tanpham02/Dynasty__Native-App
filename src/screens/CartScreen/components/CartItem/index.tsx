import { Box, Image, Text } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';

import { Svg } from '@/assets';
import styles from '@/styles';
import { formatCurrencyByLocale } from '@/utils/numberUtils';
import { CartItemProps } from './type';

const CartItem = ({ extendName, image, name, price, quantity, onOpenCartItemDetailBottomSheet }: CartItemProps) => {
  return (
    <Box className='flex flex-1 bg-third rounded-lg flex-row p-3 my-3' style={styles.shadowX}>
      <Box className='border border-zinc-100 w-[70px] h-[70px] rounded-xl bg-white flex justify-start mr-2'>
        <Image
          source={{
            uri: image,
          }}
          width={70}
          height={70}
          resizeMode='cover'
          className='rounded-xl'
        />
      </Box>
      <Box className='flex flex-col items-start flex-1'>
        <Box className='mb-5 flex-1'>
          <Text className='text-gray-10 font-nunito-700 text-[13.5px]'>{name}</Text>
          <Text className='text-gray-10 font-nunito-600 text-[10px]'>{extendName}</Text>
        </Box>
        <Pressable className='flex flex-row items-center' onPress={onOpenCartItemDetailBottomSheet}>
          <Text className='text-fourth font-nunito-600 text-xs mr-2'>Xem chi tiết</Text>
          <Svg.AnglesDown width={11} height={11} className='text-fourth' />
        </Pressable>
      </Box>
      <Box className='flex flex-col justify-between items-end'>
        <Text className='text-gray-10 font-nunito-700 text-[12.5px]'>{formatCurrencyByLocale(price)}</Text>
        <Box className='flex flex-row items-center gap-3'>
          <Box className='bg-[#424957] w-7 h-7 rounded-lg flex justify-center items-center'>
            <Svg.Minus width={16.5} height={16.5} className='text-white' />
          </Box>
          <Text className='text-gray-10 text-[14.5px] font-nunito-700'>{quantity}</Text>
          <Box className='bg-[#424957] w-7 h-7 rounded-lg flex justify-center items-center'>
            <Svg.Plus width={25} height={25} className='text-white' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
