import { ImageSourcePropType } from 'react-native';

export interface OrderProductProps {
  name: string;
  extendVariantName: string;
  price: number;
  quantity: number;
  image: ImageSourcePropType;
}
