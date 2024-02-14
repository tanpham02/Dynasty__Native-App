import React from 'react';
import { Text, View } from 'react-native';
import { CategoriesProps } from './type';
import { Box } from 'native-base';
import { PrimaryLayout } from '@/components/Layout';

const Categories = (props: CategoriesProps) => {
  return (
    <PrimaryLayout
      titleScreen="Khám phá Menu"
      statusBarBackgroundColor="white"
      containerClass="bg-third"
    >
        <Box>
            
        </Box>
    </PrimaryLayout>
  );
};

export default Categories;
