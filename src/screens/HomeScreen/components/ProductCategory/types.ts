import { ProductItemType } from "../ProductItem/types";

export interface ProductCategoryType {
    title?: string;
    readMore?: boolean;
    products?: ProductItemType[];
}