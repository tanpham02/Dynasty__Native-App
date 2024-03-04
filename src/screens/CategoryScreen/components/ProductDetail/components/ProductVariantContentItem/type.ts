import { MutableRefObject } from 'react';
import { Animated } from 'react-native';

export interface ProductVariantContentItemProps {
  title: string;
  itemIdex: number;
  className?: string;
  flatListItemLayout: MutableRefObject<{ [key: string]: Object }>;
}
