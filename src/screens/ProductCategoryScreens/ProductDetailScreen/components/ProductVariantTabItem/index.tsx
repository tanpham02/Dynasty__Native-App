import { Pressable } from 'native-base';
import React, { memo } from 'react';
import { Animated, Text } from 'react-native';

import { ProductVariantTabItemProps } from './type';

const ProductVariantTabItem = (props: ProductVariantTabItemProps) => {
  const { route, isActiveKey, onChange } = props;

  return (
    <Pressable onPress={onChange}>
      <Animated.View
        style={{
          borderBottomColor: isActiveKey ? '#e8002a' : 'transparent',
          borderBottomWidth: 2,
          borderStyle: 'solid',
        }}
        className={`text-sm font-nunito-600 mt-2 px-4 py-4 ${isActiveKey ? 'text-secondary font-nunito-700' : 'text-gray-9'}`}
      >
        <Text>{route?.title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default memo(ProductVariantTabItem);
