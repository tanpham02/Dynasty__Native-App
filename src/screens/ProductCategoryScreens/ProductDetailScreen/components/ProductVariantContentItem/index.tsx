import { Box, Text } from 'native-base';
import React, { memo, useRef } from 'react';
import { NativeSyntheticEvent, TextLayoutEventData, View } from 'react-native';

import { ProductVariantContentItemProps } from './type';

const ProductVariantContentItem = (props: ProductVariantContentItemProps) => {
  const { title, itemIdex, className, flatListItemLayout } = props;

  const defaultNumberOfLinesForEachItem = useRef<number>();

  const onLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    flatListItemLayout.current = {
      ...flatListItemLayout.current,
      [itemIdex]: {
        y,
        height,
      },
    };
  };

  const handleTextLayout = (event: NativeSyntheticEvent<TextLayoutEventData>) => {
    defaultNumberOfLinesForEachItem.current = event.nativeEvent.lines.length;
  };

  return (
    <>
      <View className={`mt-4 px-4 ${className}`} onLayout={onLayout}>
        <Text key={title} className='text-base font-nunito-600'>
          {title}
        </Text>
        {[...new Array(4)].map((_, index) => (
          <Box>
            <Text onTextLayout={handleTextLayout}>
              {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Text>
          </Box>
        ))}
      </View>
    </>
  );
};

export default memo(ProductVariantContentItem);
