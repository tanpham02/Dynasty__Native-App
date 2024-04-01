import { Box } from 'native-base';

import { ScrollView } from 'react-native';
import CartItem from '../CartItem';
import { carts } from './data';
import { CartItemProps } from './type';
// NOTE: I KNOW YOU ARE TOO BUSY BUT WHEN YOU ARE COMPLETE UI, FUTURE OR ANYTHING PLEASE SCROLL INTO HEAD OF FILE AND SORTING IMPORT. IT WILL MAKE OUR PROJECT ARE CLEAN AND PROFESSIONAL 😁😁😁

const CartLists = ({ onOpenCartItemDetailBottomSheet }: CartItemProps) => {
  return (
    <Box className='flex-1'>
      <ScrollView
        className='bg-zinc-50'
        horizontal={false}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {carts.map((cart, index) => (
          <CartItem
            key={index}
            {...cart}
            index={index}
            length={carts.length}
            onOpenCartItemDetailBottomSheet={onOpenCartItemDetailBottomSheet}
          />
        ))}
      </ScrollView>
    </Box>
  );
};

export default CartLists;
