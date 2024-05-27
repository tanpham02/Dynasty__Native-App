import { PaymentMethods } from '@/models';
import { Svg } from '@/assets';

export const paymentMethods = [
  {
    type: PaymentMethods.CASH,
    title: 'Thanh toán khi nhận hàng',
    Svg: Svg.COD,
  },
  {
    type: PaymentMethods.ATM_CARD,
    title: 'Thanh toán chuyển khoản qua ngân hàng',
    Svg: Svg.Bank,
  },
  //   {
  //     type: PaymentMethods.,
  //     title: 'Thanh toán online qua cổng VNPay (ATM/Visa/MasterCard/JCB/QR Pay trên Internet Banking)',
  //     Svg: Svg.VNPay,
  //   },
  {
    type: PaymentMethods.MOMO,
    title: 'Ví MoMo',
    Svg: Svg.Momo,
  },
];
