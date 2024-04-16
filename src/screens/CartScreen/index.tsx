import { Box, VStack, useDisclose } from 'native-base';

import { PrimaryLayout } from '@/layouts';
import { CartItemDetailBottomSheet, CartLists, FooterBarContent, ShippingMethodModal } from './components';

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
        <Box className='flex-1'>
          <CartLists onOpenCartItemDetailBottomSheet={onOpenCartItemDetailBottomSheet} />
          <FooterBarContent onOpenModalShippingMethod={onOpenModalShippingMethod} />
        </Box>
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
