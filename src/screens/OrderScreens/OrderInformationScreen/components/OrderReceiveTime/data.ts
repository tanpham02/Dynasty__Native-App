import { OrderReceivingTime, OrderTypes } from '@/models';

export const orderReceiveTimeData = {
  [OrderReceivingTime.NOW]: {
    label: (orderType?: OrderTypes) =>
      orderType === OrderTypes.ORDER_DELIVERING
        ? 'Ngay bây giờ (tối thiểu 30 phút sau khi đặt hàng thành công)'
        : 'Tối thiểu 15 phút sau khi đặt hàng thành công',
  },
  [OrderReceivingTime.SELECT_DATE_TIME]: {
    label: () => 'Chọn thời gian',
  },
};
