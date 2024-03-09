import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';

import CategoryTypeItem from '../CategoryTypeItem';
import { categoryTypes } from './data';

const CategoryTypeList = () => {
  const [activeTabKey, setActiveTabKey] = useState<number>(-1);

  const categoryTypeRef = useRef<FlatList>();

  const handleScrollToIndex = (activeTab: number) => {
    categoryTypeRef.current?.scrollToIndex({
      index: activeTab,
      viewPosition: 0.5,
    });
  };

  const handlePressCategoryItem = (index: number) => {
    setActiveTabKey(index);
    handleScrollToIndex(index);
  };

  return (
    <FlatList
      scrollEventThrottle={16}
      pagingEnabled
      keyExtractor={(_, index) => `${index}`}
      data={categoryTypes}
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={categoryTypeRef}
      style={[
        {
          height: 28,
          flexGrow: 0,
          marginTop: 12,
          marginLeft: 4,
        },
      ]}
      className='flex-1'
      snapToAlignment='center'
      renderItem={({ index, item }) => (
        <CategoryTypeItem
          key={`${index}`}
          isActive={index === activeTabKey}
          onPress={() => handlePressCategoryItem(index)}
          index={index}
          {...item}
        />
      )}
    />
  );
};

export default CategoryTypeList;
