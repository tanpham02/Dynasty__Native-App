import { CategoryTypeDataTest } from '../CategoryTypeList/type';

export interface CategoryTypeItemProps extends CategoryTypeDataTest {
  isActive?: boolean;
  onPress?: () => void;
  activeTabKey?: number;
  index: number;
}
