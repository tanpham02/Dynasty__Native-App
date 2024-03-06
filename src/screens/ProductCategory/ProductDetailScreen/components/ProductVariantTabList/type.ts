import { Animated } from 'react-native';

export interface ProductVariantTabListProps {
  setActiveTabKey?: (activeKey: number) => void;
  activeTabKey?: number;
  handleScrollToCurrentSectionList?: (index: number) => void;
}
