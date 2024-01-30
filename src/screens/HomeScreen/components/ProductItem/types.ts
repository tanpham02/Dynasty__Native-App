import { ImageURISource, StyleProp, ViewStyle } from 'react-native';

export interface ProductItemType {
  bannerImage: ImageURISource;
  productName: string;
  productPrice: number;
  width?: any;
}
