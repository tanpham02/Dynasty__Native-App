import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Route } from 'react-native-tab-view';
import ProductVariantTabItem from '../ProductVariantTabItem';
import { ProductVariantTabListProps } from './type';

const routes: Route[] = [
  { key: 'size', title: 'Kích thước' },
  { key: 'crust', title: 'Đế' },
  { key: 'sauce', title: 'Nước sốt' },
  { key: 'topping', title: 'Topping' },
];

const ProductVariantTabList = (props: ProductVariantTabListProps) => {
  const flatListRef = useRef<FlatList>();

  const handleChangeTabIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index,
      viewPosition: 0.5,
    });
    props.setActiveTabKey(index);
  };

  return (
    <FlatList
      horizontal
      snapToAlignment="start"
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      ref={flatListRef}
      keyExtractor={(_, index: number) => `${index}`}
      data={routes}
      renderItem={({ index, item }) => (
        <ProductVariantTabItem
          key={index}
          isActiveKey={index === props.activeTabKey}
          route={item}
          onChange={() => handleChangeTabIndex(index)}
        />
      )}
    />
  );
};

export default ProductVariantTabList;
