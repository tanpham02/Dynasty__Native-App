import { Box, Image, Text } from 'native-base';
import React from 'react';
import { Platform, Pressable, SafeAreaView } from 'react-native';

import ButtonPrimaryAnimated from '@/components/ButtonPrimaryAnimated';
import FooterBar from '@/components/FooterBar';
import { formatCurrencyByLocale } from '@/utils/numberUtils';
import { HeaderBar, MyStatusBar, PrimaryLayout } from '@/components';

const CartScreen = () => {
  return (
    <PrimaryLayout
      statusBarBackgroundColor='white'
      renderTitle={() => (
        <Box className='flex flex-row flex-1 items-center'>
          <Text className='font-nunito-700 text-lg'>Giỏ hàng</Text>
          <Pressable
            className='w-fit ml-auto mr-4'
            style={{
              marginTop: Platform.OS === 'android' ? 4 : 0,
            }}
          >
            <Text className='text-fourth text-xs font-nunito-600 uppercase '>Chỉnh sửa</Text>
          </Pressable>
        </Box>
      )}
    >
      <Box className='bg-primary flex-1 p-4'>
        <Text className='text-white'>Cart Screen</Text>
      </Box>

      <FooterBar
        wrapperClassName='h-[90px] flex justify-center'
        bodyClassName='flex items-center'
        renderRight={() => (
          <ButtonPrimaryAnimated>
            <Text className='text-secondary text-[11px] uppercase font-nunito-800'>Thanh toán</Text>
          </ButtonPrimaryAnimated>
        )}
      >
        <Box className='flex flex-row items-center justify-center gap-3'>
          <Box className='w-12 h-12 bg-white rounded-lg'>
            <Image
              source={{
                uri: 'https://thepizzacompany.vn/images/thumbs/000/0002223_ck-trio_300.png',
              }}
              width='100%'
              height='100%'
              resizeMode='cover'
              className='rounded-lg'
            />
          </Box>
          <Box className='flex items-start justify-center'>
            <Text className='text-white text-[17px] font-nunito-800 mt-1.5'>{formatCurrencyByLocale(89000)}</Text>
            <Text className='text-[10px] font-medium text-gray-3 opacity-80 -mt-1.5'>Giá đã bao gồm thuế</Text>
          </Box>
        </Box>
      </FooterBar>
    </PrimaryLayout>
  );
};

export default CartScreen;
