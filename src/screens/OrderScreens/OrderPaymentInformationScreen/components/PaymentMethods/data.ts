import { PaymentMethod } from '@/models';
import { Svg } from '@/assets';

export const paymentMethods = [
  {
    type: PaymentMethod.PAYMENT_ON_DELIVERY,
    title: 'Thanh toán khi nhận hàng',
    Svg: Svg.COD,
  },
  {
    type: PaymentMethod.ATM_CARD,
    title: 'Thanh toán chuyển khoản qua ngân hàng',
    Svg: Svg.Bank,
  },
  {
    type: PaymentMethod.VN_PAY,
    title: 'Thanh toán online qua cổng VNPay (ATM/Visa/MasterCard/JCB/QR Pay trên Internet Banking)',
    Svg: Svg.VNPay,
  },
  {
    type: PaymentMethod.MONO,
    title: 'Ví MoMo',
    Svg: Svg.Momo,
  },
];
