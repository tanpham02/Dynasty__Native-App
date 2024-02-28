import { Route } from 'react-native-tab-view';
import { ProductVariantTabListProps } from '../ProductVariantTabList/type';

export interface ProductVariantTabItemProps {
  route: Route;
  isActiveKey?: boolean;
  onChange: () => void;
}
