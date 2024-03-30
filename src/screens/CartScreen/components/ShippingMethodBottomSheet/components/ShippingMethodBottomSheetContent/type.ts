import { OrderTypes } from '@/models/order';
import { ImageSourcePropType } from 'react-native';

export interface ShippingMethodBottomSheetContentProps {
  type: OrderTypes;
  title: string;
  image: ImageSourcePropType;
}
