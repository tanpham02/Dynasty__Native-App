import { ImageSourcePropType } from 'react-native';

export interface CategoryTabViewListProps {
  activeTabKey: number;
  tabBarRoutes: CategoryTabViewDateItem[];
  onScrollToIndex: (index: number) => void;
}

export interface CategoryTabViewDateItem {
  key: string;
  name: string;
  icon?: ImageSourcePropType;
}
