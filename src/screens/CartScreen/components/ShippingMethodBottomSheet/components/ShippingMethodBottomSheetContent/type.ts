import { OrderTypes } from '@/models/orderModel';
import { ImageSourcePropType } from 'react-native';

export interface ShippingMethodBottomSheetContentProps {
  type: OrderTypes;
  title: string;
  image: ImageSourcePropType;
  shippingMethodSelected: OrderTypes;
  setShippingMethodSelected: (type: OrderTypes) => void;
}
