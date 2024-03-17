import { Box, Text } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';

import CartItem from '../CartItem';
import { carts } from './data';
import { CartItemProps } from './type';

const CartLists = ({ onOpenCartItemDetailBottomSheet }: CartItemProps) => {
  return (
    <SwipeListView
      className='px-3 flex-1 flex flex-col pt-3'
      data={carts}
      renderItem={({ index, item }) => (
        <CartItem key={index} {...item} onOpenCartItemDetailBottomSheet={onOpenCartItemDetailBottomSheet} />
      )}
      keyExtractor={(_, index: number) => index.toString()}
      rightOpenValue={-75}
      disableRightSwipe
      closeOnRowOpen
      renderHiddenItem={() => (
        <Box className='w-fit ml-auto'>
          <Text>Hello</Text>
        </Box>
      )}
    />
  );
};

export default CartLists;
