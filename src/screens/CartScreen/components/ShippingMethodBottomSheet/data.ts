import OrderDelivery from '@/assets/images/order-delivery.png';
import OrderToPickUp from '@/assets/images/order-to-pick-up.png';
import { TITLE_BY_ORDER_TYPES } from '@/constants/order';
import { OrderTypes } from '@/models/orderModel';

export const shippingMethodData = [
  {
    type: OrderTypes.ORDER_DELIVERING,
    title: TITLE_BY_ORDER_TYPES[OrderTypes.ORDER_DELIVERING],
    image: OrderDelivery,
  },
  {
    type: OrderTypes.ORDER_TO_PICK_UP,
    title: TITLE_BY_ORDER_TYPES[OrderTypes.ORDER_TO_PICK_UP],
    image: OrderToPickUp,
  },
];
