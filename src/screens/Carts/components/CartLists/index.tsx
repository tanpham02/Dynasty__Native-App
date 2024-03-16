import React from 'react';

import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from '../CartItem';
import { carts } from './data';
import { CartItemProps } from './type';
import { View } from 'react-native';
import { Box, Text } from 'native-base';

const CartLists = ({ onOpenCartItemDetailBottomSheet }: CartItemProps) => {
  return (
    <SwipeListView
      className='px-3 flex-1 flex flex-col pt-3'
      data={carts}
      renderItem={({ index, item }) => (
        <CartItem key={index} {...item} onOpenCartItemDetailBottomSheet={onOpenCartItemDetailBottomSheet} />
      )}
      rightOpenValue={-75}
      disableRightSwipe
      renderHiddenItem={() => (
        <Box>
          <Text>Hello</Text>
        </Box>
      )}
    />
  );
};

export default CartLists;
