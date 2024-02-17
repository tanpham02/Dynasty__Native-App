import React, { forwardRef } from 'react';
import { FlatList } from 'react-native';

import { tabBarRoutes } from '../CategoryTabViewGroup/data';
import CategoryTabViewItem from '../CategoryTabViewItem';
import { CategoryTabViewListProps } from './type';

const CategoryTabViewList = (
  props: CategoryTabViewListProps,
  categoryTabViewGroupRef: React.Ref<any>,
) => {
  return (
    <FlatList
      scrollEventThrottle={16}
      pagingEnabled
      keyExtractor={(_, index) => `${index}`}
      data={tabBarRoutes.map((item) => ({ ...item, title: item.name }))}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        height: 90,
        flexGrow: 0,
      }}
      snapToAlignment="center"
      className="ml-20"
      ref={categoryTabViewGroupRef}
      renderItem={({ index, item }) => (
        <CategoryTabViewItem
          categoryItem={item}
          index={index}
          activeTabKey={props.activeTabKey}
          onScrollToIndex={props.onScrollToIndex}
          setActiveTabKey={props.setActiveTabKey}
        />
      )}
    />
  );
};

export default forwardRef(CategoryTabViewList);