import OrderDelivery from '@/assets/images/order-delivery.png';
import OrderToPickUp from '@/assets/images/order-to-pick-up.png';
import { OrderTypes } from '@/models/order';

export const shippingMethodData = [
  {
    type: OrderTypes.ORDER_DELIVERING,
    title: 'Đặt giao hàng',
    image: OrderDelivery,
  },
  {
    type: OrderTypes.ORDER_TO_PICK_UP,
    title: 'Đặt đến lấy',
    image: OrderToPickUp,
  },
];
