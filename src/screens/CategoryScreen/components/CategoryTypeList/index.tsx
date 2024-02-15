import { Box, FlatList } from 'native-base';
import React from 'react';
import { categoryTypes } from './data';
import CategoryTypeItem from '../CategoryTypeItem';
import { heightScreen } from '@/utils';

const CategoryTypeList = () => {
  return (
    <FlatList
      scrollEventThrottle={16}
      pagingEnabled
      keyExtractor={(_, index) => `${index}`}
      data={categoryTypes.map((item) => ({ ...item, title: item.name }))}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={{
        height: heightScreen,
        flexGrow: 0,
      }}
      snapToAlignment="center"
      renderItem={({ index, item }) => <CategoryTypeItem key={index} {...item} />}
    />
  );
};

export default CategoryTypeList;
