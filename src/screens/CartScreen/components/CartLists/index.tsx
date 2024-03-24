import { Box, Text } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';

import CartItem from '../CartItem';
import { carts } from './data';
import { CartItemProps } from './type';
import styles from '@/styles';
import CartItemHiddenRight from '../CartItemHiddenRight';

const CartLists = ({ onOpenCartItemDetailBottomSheet }: CartItemProps) => {
  return (
    <SwipeListView
      className='px-3 flex-1 flex flex-col'
      data={carts}
      renderItem={({ index, item }) => (
        <CartItem key={index} {...item} onOpenCartItemDetailBottomSheet={onOpenCartItemDetailBottomSheet} />
      )}
      keyExtractor={(_, index: number) => index.toString()}
      rightOpenValue={-80}
      disableRightSwipe
      closeOnRowOpen
      renderHiddenItem={() => <CartItemHiddenRight />}
    />
  );
};

export default CartLists;
