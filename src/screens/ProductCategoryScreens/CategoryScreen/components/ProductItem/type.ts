import { ProductModel } from '@/models';

export interface ProductItemProps extends ProductModel {
  index: number;
  length: number;
}
