import { Box } from 'native-base';
import React, { useRef, useState } from 'react';
import { categoryTypes } from './data';
import CategoryTypeItem from '../CategoryTypeItem';
import { heightScreen } from '@/utils';
import { FlatList } from 'react-native';

const CategoryTypeList = () => {
  const [activeTabKey, setActiveTabKey] = useState<number>(0);

  const categoryTypeRef = useRef<FlatList>();

  const handleScrollToIndex = (activeTab: number) => {
    categoryTypeRef.current?.scrollToIndex({
      index: activeTab,
      viewPosition: 0.5,
    });
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
      snapToAlignment="center"
      renderItem={({ index, item }) => (
        <CategoryTypeItem
          key={`${index}`}
          isActive={index === activeTabKey}
          onPress={() => {
            setActiveTabKey(index);
            handleScrollToIndex(index);
          }}
          {...item}
        />
      )}
    />
  );
};

export default CategoryTypeList;
