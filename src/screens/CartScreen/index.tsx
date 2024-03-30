import { Box, Flex, SimpleGrid, VStack, useDisclose } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryLayout } from '@/components';
import styles from '@/styles';
import {
  CartItemDetailBottomSheet,
  CartLists,
  CartOptionExpandMenu,
  DeliveryInstruction,
  ExpandCoupon,
  FooterBarContent,
  RelatedProductsFlatList,
  ShippingMethodModal,
  TotalPayment,
} from './components';

const CartScreen = () => {
  const {
    isOpen: visibleCartItemDetailBottomSheet,
    onOpen: onOpenCartItemDetailBottomSheet,
    onClose: onCloseCartItemDetailBottomSheet,
  } = useDisclose();

  const {
    isOpen: visibleModalShippingMethod,
    onOpen: onOpenModalShippingMethod,
    onClose: onCloseModalShippingMethod,
  } = useDisclose();

  return (
    <>
      <PrimaryLayout containerClass='bg-third' statusBarBackgroundColor='white' titleScreen='Giỏ hàng'>
        <VStack className='flex-1'>
          <CartLists onOpenCartItemDetailBottomSheet={onOpenCartItemDetailBottomSheet} />

          <FooterBarContent onOpenModalShippingMethod={onOpenModalShippingMethod} />
        </VStack>
      </PrimaryLayout>
      <CartItemDetailBottomSheet
        visible={visibleCartItemDetailBottomSheet}
        onClose={onCloseCartItemDetailBottomSheet}
      />
      <ShippingMethodModal visible={visibleModalShippingMethod} onClose={onCloseModalShippingMethod} />
    </>
  );
};

export default CartScreen;
