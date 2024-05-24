import { OrderTypes } from '@/models/orderModel';

export const TITLE_BY_ORDER_TYPES = {
  [OrderTypes.DELIVERY]: 'Đặt giao hàng',
  [OrderTypes.PICK_UP]: 'Đặt đến lấy',
};
