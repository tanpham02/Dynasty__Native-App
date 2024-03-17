import { Box, Image, Text, useDisclose } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryLayout } from '@/components';
import ButtonPrimaryAnimated from '@/components/ButtonPrimaryAnimated';
import FooterBar from '@/components/FooterBar';
import { formatCurrencyByLocale } from '@/utils/numberUtils';
import CartItemBottomSheet from '../components/CartItemDetailBottomSheet';
import DeliveryInstruction from '../components/DeliveryInstruction';
import styles from '@/styles';
import { Svg } from '@/assets';
import RelatedProductsFlatList from '../components/RelatedProductsFlatList';
import CartLists from '../components/CartLists';
import TotalPayment from '../components/TotalPayment';
// NOTE: REMEMBER TO EXPORT ALL COMPONENT IN EACH PARENT FOLDER IN index.ts file, then import them as one line.

const CartScreen = () => {
  const {
    isOpen: visibleCartItemDetailBottomSheet,
    onOpen: onOpenCartItemDetailBottomSheet,
    onClose: onCloseCartItemDetailBottomSheet,
  } = useDisclose();

  return (
    <PrimaryLayout containerClass='bg-third' statusBarBackgroundColor='white' titleScreen='Giỏ hàng'>
      <KeyboardAvoidingView className='flex-1'>
        <KeyboardAwareScrollView className='flex-1'>
          <ScrollView className='bg-third pt-3 flex-1 mb-[100px] pb-3' style={styles.shadowX}>
            <CartLists onOpenCartItemDetailBottomSheet={onOpenCartItemDetailBottomSheet} />

            <Box style={styles.shadowX} className='px-3 py-3'>
              <DeliveryInstruction />
            </Box>

            <RelatedProductsFlatList />

            <Box className='px-3'>
              {/* NOTE: FROM */}
              <Pressable className='bg-third rounded-lg p-3 mb-3 flex flex-row' style={styles.shadowX}>
                <Svg.FoodMenu width={28} height={28} className='text-black mr-2' />
                <Box className='flex flex-1'>
                  <Text className='text-[15px] font-nunito-700 text-gray-10'>Khám phá Menu</Text>
                  <Text className='text-xs font-nunito-500 text-gray-1'>Thêm sản phẩm vào giỏ hàng của bạn</Text>
                </Box>
                <Svg.AnglesRight width={18} height={18} className='text-black' />
              </Pressable>

              <Pressable className='bg-third rounded-lg p-3 mb-3 flex flex-row' style={styles.shadowX}>
                <Svg.Offer width={28} height={28} className='text-secondary mr-2' />
                <Box className='flex flex-1'>
                  <Text className='text-[15px] font-nunito-700 text-gray-10'>Sử dụng Coupon</Text>
                  <Text className='text-xs font-nunito-500 text-gray-1'>
                    Sử dụng coupon & xem các ưu đãi tuyệt vời có sẵn
                  </Text>
                </Box>
                <Svg.AnglesRight width={18} height={18} className='text-black' />
              </Pressable>
              {/* NOTE: TO */}

              {/* FIXME: SPLIT THIS LARGE CODE INTO A COMPONENT FOR READABLE */}
              <TotalPayment />
            </Box>
          </ScrollView>

          <CartItemBottomSheet visible={visibleCartItemDetailBottomSheet} onClose={onCloseCartItemDetailBottomSheet} />
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>

      {/* NOTE: FROM */}
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
          <Box className='w-12 h-12 bg-white rounded-lg border-2 border-white'>
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
      {/* NOTE: TO */}
      {/* FIXME: SPLIT THIS LARGE CODE INTO A COMPONENT FOR READABLE */}
    </PrimaryLayout>
  );
};

export default CartScreen;
