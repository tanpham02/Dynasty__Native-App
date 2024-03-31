import { OrderTypes } from '@/models/orderModel';

export const TITLE_BY_ORDER_TYPES = {
    [OrderTypes.ORDER_DELIVERING]: 'Đặt giao hàng',
    [OrderTypes.ORDER_TO_PICK_UP]: 'Đặt đến lấy',
};
