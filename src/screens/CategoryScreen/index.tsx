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
    <PrimaryLayout
      titleScreen="Khám phá Menu"
      statusBarBackgroundColor="white"
      containerClass="bg-third"
    >
      <Box className="flex-1 mt-3">
        <Box className="flex-1 px-1.5 flex items-center h-[100px]" style={styles.shadowX}>
          <Box
            className="absolute left-4 flex justify-center items-center flex-col pr-4"
            style={{
              shadowOffset: {
                height: 0,
                width: 6,
              },
            }}
          >
            <Box className="bg-secondary w-14 h-14 rounded-full flex justify-center items-center">
              <Svg.FoodMenu width={36} height={36} className="text-white mt-1" />
            </Box>
            <Text className="text-[13px] text-secondary font-nunito-600 mt-2">Menu</Text>
          </Box>
          <CategoryTabViewGroup />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default Categories;
