import { Box, Flex, Image, Pressable, Text } from 'native-base';

import { CategoryTypeItemProps } from './type';
import { useState } from 'react';

const CategoryTypeItem = ({ icon, name, isActive, onPress }: CategoryTypeItemProps) => {
  return (
    <Flex
      className={`px-2 border  ${isActive ? 'border-secondary bg-secondary ' : 'border-zinc-300 bg-zinc-50 '} rounded-2xl ml-3`}
    >
      <Pressable className="flex-1" onPress={onPress}>
        <Box className="flex-row items-center h-full flex-1">
          <Image
            source={{
              uri: icon,
            }}
            width={3.5}
            height={3.5}
            resizeMode="contain"
            className="object-contain mr-1.5"
            alt={name}
          />
          <Text
            className={`text-black font-nunito-500 text-xs flex-1 ${isActive ? 'text-white' : 'text-black'}`}
            numberOfLines={2}
          >
            {name}
          </Text>
        </Box>
      </Pressable>
    </Flex>
  );
};

export default CategoryTypeItem;
