import { Box, Text } from 'native-base';
import React from 'react';

import { FlatList } from 'react-native';
import { carts } from '../CartLists/data';
import RelatedProductItem from '../RelatedProductItem';

const RelatedProductsFlatList = () => {
  return (
    <Box className='flex-1 bg-third'>
      <Text className='text-[15px] font-nunito-700 text-gray-10 px-3'>Khách mua các sản phẩm này cũng đặt thêm</Text>
      <FlatList
        className='rounded-lg'
        scrollEventThrottle={16}
        style={{ backgroundColor: '#f5faff', paddingLeft: 12 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment='center'
        keyExtractor={(_, index: number) => index.toString()}
        data={carts}
        renderItem={({ item, index }) => <RelatedProductItem key={index} {...item} />}
      />
    </Box>
  );
};

export default RelatedProductsFlatList;
