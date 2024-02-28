import { Pressable } from 'native-base';
import React from 'react';
import { Animated } from 'react-native';

import { ProductVariantTabItemProps } from './type';

const ProductVariantTabItem = (props: ProductVariantTabItemProps) => {
  const { route, isActiveKey, onChange } = props;

  return (
    <Pressable onPress={onChange}>
      <Animated.Text
        className={`text-sm font-nunito-600 mt-2 border-b-2 px-4 py-4 ${isActiveKey ? 'text-secondary font-nunito-700 border-b-secondary' : 'text-gray-9 border-b-transparent'}`}
      >
        {route?.title}
      </Animated.Text>
    </Pressable>
  );
};

export default ProductVariantTabItem;
