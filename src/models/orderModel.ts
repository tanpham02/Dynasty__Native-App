import { BaseModel } from '@/types';

enum OrderStatuses {
  PENDING = 'PENDING', // Chờ xác nhận
  DELIVERING = 'DELIVERING', // Đang vận chuyển
  CANCELED = 'CANCELED', // Đã hủy
  SUCCESS = 'SUCCESS', // Hoàn thành
  WAITING_FOR_DELIVERING = 'WAITING_FOR_DELIVERING', // Chờ lấy hàng
  WAITING_FOR_PAYMENT = 'WAITING_FOR_PAYMENT', // Chờ thanh toán
}

enum OrderTypes {
  PICK_UP = 'PICK_UP', // Đặt đến lấy
  DELIVERY = 'DELIVERY', // Đặt giao hàng
}

enum OrderReceivingTime {
  NOW = 'NOW', // Tối thiểu 15p sau khi đặt hàng thành công
  SELECT_DATE_TIME = 'SELECT_DATE_TIME', // Chọn thời gian
}

enum StatusCheckout {
  VERIFY_INFORMATION = 'VERIFY_INFORMATION', // Bước nhâp thông tin (WAITING_FOR_PAYMENT)
  ORDER_CONFIRMATION = 'ORDER_CONFIRMATION', // Bước xác nhận đăt hàng, chọn phương thức thanh toán = > chờ xác nhân (PENDING)
}

enum PaymentMethods {
  CASH = 'CASH',
  MOMO = 'MOMO',
  ATM_CARD = 'ATM_CARD',
  SHOPEE_PAY = 'SHOPEE_PAY',
  ZALO_PAY = 'ZALO_PAY',
}

interface OrderProductItem {
  product?: string;
  note?: string;
  quantity?: number;
}

interface OrderModel extends BaseModel {
  customerId?: string;
  products?: OrderProductItem[];
  shipFee?: number;
  orderStatus?: OrderStatuses;
  fullName?: string;
  phoneNumber?: string;
  orderType?: OrderTypes;
  orderReceivingTime?: OrderReceivingTime;
  orderReceivingTimeAt?: Date | string;
  storeId?: string;
  voucherId?: string;
  shipperId?: string;
  reasonCancel?: string;
  paymentMethod?: PaymentMethods;
  note?: string;
  subTotal?: number;
  total?: number;
}

export { OrderReceivingTime, PaymentMethods, StatusCheckout, OrderStatuses, OrderTypes };
export default OrderModel;
