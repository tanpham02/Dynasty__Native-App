enum OrderStatuses {
  PENDING = 'PENDING', // Chờ xác nhận
  DELIVERING = 'DELIVERING', // Đang vận chuyển
  CANCELED = 'CANCELED', // Đã hủy
  SUCCESS = 'SUCCESS', // Hoàn thành
  WAITING_FOR_DELIVERING = 'WAITING_FOR_DELIVERING', // Chờ lấy hàng
  WAITING_FOR_PAYMENT = 'WAITING_FOR_PAYMENT', // Chờ thanh toán
}
enum OrderTypes {
  ORDER_TO_PICK_UP = 'ORDER_TO_PICK_UP', // Đặt đến lấy
  ORDER_DELIVERING = 'ORDER_DELIVERING', // Đặt giao hàng
}

enum OrderReceivingTime {
  NOW = 'NOW', // Tối thiểu 15p sau khi đặt hàng thành công
  SELECT_DATE_TIME = 'SELECT_DATE_TIME', // Chọn thời gian
}

enum StatusCheckout {
  VERIFY_INFORMATION = 'VERIFY_INFORMATION', // Bước nhâp thông tin (WAITING_FOR_PAYMENT)
  ORDER_CONFIRMATION = 'ORDER_CONFIRMATION', // Bước xác nhận đăt hàng, chọn phương thức thanh toán = > chờ xác nhân (PENDING)
}

enum PaymentMethod {
  PAYMENT_ON_DELIVERY = 'PAYMENT_ON_DELIVERY', // Thanh toán khi nhân hàng
  MONO = 'MONO',
  ATM_CARD = 'ATM_CARD',
  SHOPEE_PAY = 'SHOPEE_PAY',
  ZALO_PAY = 'ZALO_PAY',
  VN_PAY = 'VN_PAY',
}

interface OrderModel {
  _id?: string;
  customerId?: string;
  productsFromCart?: Array<{
    product?: string;
    note?: string;
    productQuantities: number;
  }>;
  productsWhenTheCustomerIsNotLoggedIn?: Array<{
    product?: string;
    note?: string;
    productQuantities: number;
  }>;
  shipFee?: number;
  totalAmountBeforeUsingDiscount?: number;
  statusOrder?: OrderStatuses;
  fullName?: string;
  phoneNumber?: string;
  location?: string;
  city?: string;
  cityId?: number;
  district?: string;
  districtId?: number;
  ward?: string;
  wardId?: number;
  orderType?: OrderTypes;
  orderReceivingTime?: OrderReceivingTime;
  dateTimeOrderReceive?: Date | string;
  voucherId?: string;
  orderAtStore?: string;
  reasonOrderCancel?: string;
  totalOrder?: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  statusCheckout?: StatusCheckout;
  paymentMethod?: PaymentMethod;
  note?: string;
}

export { OrderReceivingTime, PaymentMethod, StatusCheckout, OrderStatuses, OrderTypes };
export default OrderModel;
