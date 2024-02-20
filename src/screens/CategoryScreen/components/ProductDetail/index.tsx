import { MyStatusBar, PrimaryLayout } from '@/components';
import { useStatusBarForAndroid } from '@/hooks';
import { Box, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import HeaderBar from './HeaderBar';

const ProductDetail = () => {
  useStatusBarForAndroid('white');

  return (
    <>
      <MyStatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView className="flex-1">
        <Box className="flex-1">
          <HeaderBar title="Pizza Hải Sản Đào" />
        </Box>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
