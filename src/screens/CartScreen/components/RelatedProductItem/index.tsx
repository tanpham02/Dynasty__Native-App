import { Box, Image, Pressable, Text } from 'native-base';
import React from 'react';

import { Svg } from '@/assets';
import styles from '@/styles';
import { formatCurrencyByLocale } from '@/utils';
import { RelatedProductItemProps } from './type';

const RelatedProductItem = ({ name, image, price }: RelatedProductItemProps) => {
  return (
    <Box style={styles.shadowX} className='bg-third rounded-lg p-3 mr-3 my-3 flex flex-col'>
      <Box className='w-full h-[60px] bg-zinc-200 rounded-lg flex items-center justify-center'>
        <Image
          source={{
            uri: 'https://thepizzacompany.vn/images/thumbs/000/0002214_sf-deluxe_300.png',
          }}
          width='full'
          className='rounded-lg'
          height={60}
          resizeMode='contain'
          alt='image'
        />
      </Box>
      <Text className='text-sm font-nunito-700 text-gray-10 my-3'>{name}</Text>
      <Box className='flex flex-row items-center justify-between'>
        <Text className='text-xs font-nunito-600 text-gray-10'>{formatCurrencyByLocale(price)}</Text>
        <Pressable className='flex flex-row items-center bg-secondary rounded-lg px-2 py-1'>
          <Svg.Plus width={14} height={14} className='text-white' />
          <Text className='text-white text-[10px] font-nunito-700 uppercase'>Thêm</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default RelatedProductItem;
