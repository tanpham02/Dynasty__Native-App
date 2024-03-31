import { OrderReceivingTime } from '@/models/orderModel';

export const orderReceiveTimeData = {
  [OrderReceivingTime.NOW]: 'Ngay bây giờ (tối thiểu 30 phút sau khi đặt hàng thành công)',
  [OrderReceivingTime.SELECT_DATE_TIME]: 'Chọn thời gian',
};
