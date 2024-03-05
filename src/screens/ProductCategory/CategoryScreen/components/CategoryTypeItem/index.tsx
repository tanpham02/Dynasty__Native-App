import { Box, Flex, Image, Pressable, Text } from 'native-base';

import { CategoryTypeItemProps } from './type';
import { useState } from 'react';
import { ProductTypeIconList } from '../ProductList/data';
import { ProductType } from '@/models/productModel';
import { categoryTypes } from '../CategoryTypeList/data';

const CategoryTypeItem = ({ icon: Icon, name, isActive, onPress, typeKey, index }: CategoryTypeItemProps) => {
  return (
    <Box
      className={`${index === categoryTypes.length - 1 ? 'mr-4' : ''} px-2 border ${isActive ? 'border-secondary bg-secondary ' : 'border-zinc-300 bg-zinc-50 '} rounded-2xl ml-3 flex-1`}
    >
      <Pressable className='flex-1' onPress={onPress}>
        <Box className='flex-row items-center h-full flex-1 gap-1.5'>
          <Icon
            width={typeKey === ProductType.SPICY ? 20 : 17}
            height={typeKey === ProductType.SPICY ? 20 : 17}
            color={!isActive ? ProductTypeIconList[typeKey].color : 'white'}
          />
          <Text
            className={`text-black font-nunito-600 text-[11px] flex-1 ${isActive ? 'text-white' : 'text-black'}`}
            numberOfLines={2}
          >
            {name}
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
};

export default CategoryTypeItem;
