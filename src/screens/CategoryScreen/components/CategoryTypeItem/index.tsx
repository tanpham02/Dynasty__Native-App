import { Box, FlatList, Image, Text } from 'native-base';
import React from 'react';
import { categoryTypes } from '../CategoryTypeList/data';
import { CategoryTypeItemProps } from './type';
import { Svg } from 'react-native-svg';

const CategoryTypeItem = (props: CategoryTypeItemProps) => {
  return (
    <Box className="flex-1 flex-col items-center justify-start border border-gray-1 rounded-lg bg-white p-3 w-[70px] h-auto mb-4 overflow-hidden">
      <Image
        source={{
          uri: props.icon,
        }}
        width={4}
        height={4}
        className="object-contain mr-2 "
      />
      <Text className="text-black font-nunito-500 text-xs text-center">{props.name}</Text>
    </Box>
  );
};

export default CategoryTypeItem;
