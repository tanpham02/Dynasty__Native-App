import { ProductType } from '@/models/productModel';
import { CategoryTypeDataTest } from './type';
import { Svg } from '@/assets';

export const categoryTypes: CategoryTypeDataTest[] = [
  {
    typeKey: ProductType.BEST_SELLER,
    name: 'Bán chạy',
    icon: Svg.StarSolid,
  },
  {
    typeKey: ProductType.SPICY,
    name: 'Cay',
    icon: Svg.Spicy,
  },
  {
    typeKey: ProductType.UNIQUE,
    name: 'Độc đáo',
    icon: Svg.Unique,
  },
  {
    typeKey: ProductType.NEW,
    name: 'Mới',
    icon: Svg.New,
  },
  {
    typeKey: ProductType.DELICIOUS_MUST_TRY,
    name: 'Ngon phải thử',
    icon: Svg.Delicious,
  },
  {
    typeKey: ProductType.VEGETARIAN,
    name: 'Chay',
    icon: Svg.Vegetarian,
  },
];
