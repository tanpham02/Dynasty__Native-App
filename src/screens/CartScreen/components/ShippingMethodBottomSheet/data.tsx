import { Box, Text } from 'native-base';

import OrderDelivery from '@/assets/images/order-delivery.png';
import OrderToPickUp from '@/assets/images/order-to-pick-up.png';
import { TITLE_BY_ORDER_TYPES } from '@/constants/order';
import { OrderTypes } from '@/models/orderModel';

export const shippingMethodData = [
  {
    type: OrderTypes.ORDER_DELIVERING,
    title: TITLE_BY_ORDER_TYPES[OrderTypes.ORDER_DELIVERING],
    image: OrderDelivery,
    renderContent: () => (
      <Text className='text-[14.3px] font-nunito-400'>
        Giao hàng tận nơi với đơn hàng{' '}
        <Text>
          {' '}
          <Text className='text-secondary font-nunito-600'>thực thanh toán</Text>
        </Text>{' '}
        từ{' '}
        <Text>
          {' '}
          <Text className='text-secondary font-nunito-600'>100.000đ</Text>
        </Text>
        . Phụ thu phí giao hàng từ{' '}
        <Text>
          {' '}
          <Text className='text-secondary font-nunito-600'>25,000đ</Text>
        </Text>{' '}
        cho mỗi đơn đặt hàng qua Hotline 037280076 hoặc Website, bao gồm hoá đơn có các sản phẩm thuộc chương trình
        khuyến mãi.
      </Text>
    ),
  },
  {
    type: OrderTypes.ORDER_TO_PICK_UP,
    title: TITLE_BY_ORDER_TYPES[OrderTypes.ORDER_TO_PICK_UP],
    image: OrderToPickUp,
    renderContent: () => (
      <Box className='flex-col justify-center items-start'>
        <Text className='text-[14.5px] font-nunito-400'>Nhận đơn hàng của bạn tại</Text>
        <Text className='text-[14.5px] text-gray-10 font-nunito-700'>Nhà hàng Dynasty Pizza</Text>
      </Box>
    ),
  },
];
