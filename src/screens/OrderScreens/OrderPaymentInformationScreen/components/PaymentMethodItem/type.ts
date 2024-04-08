import { SvgProps } from 'react-native-svg';

import { PaymentMethod } from '@/models';

export interface PaymentMethodItemProps {
  type: PaymentMethod;
  title: string;
  Svg: React.FC<SvgProps>;
  onPressPaymentMethodItem: () => void;
}
