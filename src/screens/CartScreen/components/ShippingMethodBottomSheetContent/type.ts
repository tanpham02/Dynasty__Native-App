import { ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

import { OrderTypes } from '@/models';

export interface ShippingMethodBottomSheetContentProps {
  title: string;
  image: ImageSourcePropType;
  isActive: boolean;
  renderContent: () => ReactNode;
  onSelect: () => void;
}
