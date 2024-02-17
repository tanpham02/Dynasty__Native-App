import { heightScreen, widthScreen } from '@/utils';
import { Box, Image } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { categoriesData } from './data';
import ProductItem from '../ProductItem';

const ProductList = () => {
  return (
    <FlatList
      scrollEventThrottle={16}
      pagingEnabled
      keyExtractor={(_, index) => `${index}`}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      snapToAlignment="center"
      style={{
        height: heightScreen,
        flexGrow: 0,
        backgroundColor: 'white',
        width: widthScreen,
      }}
      className="absolute top-[55px] left-0 right-0 bottom-0"
      data={categoriesData}
      renderItem={({ index, item }) => <ProductItem key={index} {...item} />}
    />
  );
};

export default ProductList;
