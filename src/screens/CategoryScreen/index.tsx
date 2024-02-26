import { useState } from 'react';
import { Animated, StatusBar, Text, View } from 'react-native';
import { CategoriesProps } from './type';
import { Box, Pressable, useColorModeValue } from 'native-base';
import { PrimaryLayout } from '@/components/Layout';
import { Svg } from '@/assets';
import CategoryTabViewGroup from './components/CategoryTabViewGroup';
import styles from '@/styles';

const Categories = (props: CategoriesProps) => {
  return (
    <PrimaryLayout titleScreen='Khám phá Menu' statusBarBackgroundColor='white' containerClass='bg-third'>
      <Box className='flex-1 mt-3'>
        <CategoryTabViewGroup />
      </Box>
    </PrimaryLayout>
  );
};

export default Categories;
