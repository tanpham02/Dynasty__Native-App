import { Box, Text } from 'native-base';
import React, { useRef } from 'react';
import { NativeSyntheticEvent, TextLayoutEventData, View } from 'react-native';

import { ProductVariantContentItemProps } from './type';

const ProductVariantContentItem = (props: ProductVariantContentItemProps) => {
  const { title, itemIdex, className, flatListItemLayout } = props;

  const DEFAULT_NUMBER_OF_LINE = 2;

  const cancelRef = useRef<any>();

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
            {/* {defaultNumberOfLinesForEachItem.current >= 2 && (
              <Pressable
                className='bg-black flex flex-row items-center rounded-lg p-1 h-fit w-fit'
                onPress={() =>
                  setNumberOfLine(
                    numberOfLine === defaultNumberOfLinesForEachItem.current
                      ? DEFAULT_NUMBER_OF_LINE
                      : defaultNumberOfLinesForEachItem.current,
                  )
                }
              >
                <Text className='text-white text-xs w-fit'>{`${numberOfLine === defaultNumberOfLinesForEachItem.current ? 'Ẩn bớt' : 'Xem thêm'}`}</Text>
                <Svg.ArrowDown
                  width={18}
                  height={18}
                  className={`text-white ${numberOfLine === defaultNumberOfLinesForEachItem.current ? 'rotate-180' : ''}`}
                />
              </Pressable>
            )} */}
          </Box>
        ))}
      </View>
    </>
  );
};

export default ProductVariantContentItem;
