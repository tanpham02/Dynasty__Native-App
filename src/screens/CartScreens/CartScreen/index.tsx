import { Box, useDisclose } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PrimaryLayout } from '@/components';
import styles from '@/styles';
import {
  CartLists,
  CartOptionExpandMenu,
  DeliveryInstruction,
  ExpandCoupon,
  FooterBarContent,
  RelatedProductsFlatList,
  TotalPayment,
  CartItemDetailBottomSheet,
} from '../components';

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
              <CartOptionExpandMenu />
              <ExpandCoupon />
              <TotalPayment />
            </Box>
          </ScrollView>
          <CartItemDetailBottomSheet
            visible={visibleCartItemDetailBottomSheet}
            onClose={onCloseCartItemDetailBottomSheet}
          />
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>

      <FooterBarContent />
    </PrimaryLayout>
  );
};

export default CartScreen;
