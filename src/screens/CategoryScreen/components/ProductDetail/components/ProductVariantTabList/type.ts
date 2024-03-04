import { Animated } from 'react-native';

export interface ProductVariantTabListProps {
  setActiveTabKey?: (activeKey: number) => void;
  setIsCheckedTab?: (value: boolean) => void;
  activeTabKey?: number;
  handleScrollToCurrentSectionList?: (index: number) => void;
}
