import { CategoryTabViewDateItem, CategoryTabViewListProps } from '../CategoryTabViewList/type';

export interface CategoryTabViewItemProps extends Omit<CategoryTabViewListProps, 'tabBarRoutes'> {
  categoryItem: CategoryTabViewDateItem;
  index: number;
}
