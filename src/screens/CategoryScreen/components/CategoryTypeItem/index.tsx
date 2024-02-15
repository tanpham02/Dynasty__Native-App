import { Box, FlatList, Image, Text } from 'native-base';
import React from 'react';
import { categoryTypes } from '../CategoryTypeList/data';
import { CategoryTypeItemProps } from './type';
import { Svg } from 'react-native-svg';

const CategoryTypeItem = (props: CategoryTypeItemProps) => {
  return (
    <Box className="flex-1 flex-col items-center justify-start border border-primary rounded-full bg-white p-3 w-[60px] h-[60px] mb-4 overflow-hidden">
      <Image
        source={{
          uri: props.icon,
        }}
        width={5}
        height={5}
        className="object-contain mr-2 "
      />
      <Text className="text-black font-nunito-500 text-xs flex flex-wrap">
        {props.name.slice(0, 3) + ' ...'}
      </Text>
    </Box>
  );
};

export default CategoryTypeItem;
