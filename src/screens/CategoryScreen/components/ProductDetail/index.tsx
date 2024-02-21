import { MyStatusBar } from '@/components';
import { useStatusBarForAndroid } from '@/hooks';
import { Box, Divider, Image, Text } from 'native-base';
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
          <HeaderBar
            headerBarClass="h-[30%] bg-third relative flex flex-col"
            renderTitle={() => (
              <>
                <Image
                  source={{
                    uri: 'https://thepizzacompany.vn/images/thumbs/000/0002214_sf-deluxe_300.png',
                  }}
                  style={{
                    width: 160,
                    height: 160,
                    objectFit: 'contain',
                  }}
                  className="mx-auto"
                />
                <Box className="flex-1 bg-yellow-400">
                  <Box className="bg-secondary">
                    <Text>Pizza Hải Sản Đào</Text>
                    <Text>Tôm, Đào hoà quyện bùng nổ cùng sốt Thousand Island</Text>
                  </Box>
                </Box>
              </>
            )}
          />
          <Divider color="blue.200" />

          <Box className="bg-secondary flex-1"></Box>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
