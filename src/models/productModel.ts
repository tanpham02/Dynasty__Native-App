export enum ProductType {
    NORMAL = 'NORMAL', // bình thường
    NEW = 'NEW', // mới
    BEST_SELLER = 'BEST_SELLER', // bán chạy
    DELICIOUS_MUST_TRY = 'DELICIOUS_MUST_TRY', // ngon phải thử
    VEGETARIAN = 'VEGETARIAN', // chay
    SPICY = 'SPICY', // cay
    UNIQUE = 'UNIQUE', // độc đáo
}

interface ProductModel {
    _id?: string;
    name?: string;
    description?: string;
    information?: string;
    categoryId?: string;
    price?: number;
    oldPrice?: number; // Don't need to care
    image?: string;
    images?: string[];
    types?: ProductType[];
    orderQuantity?: number;
    visible?: boolean;
    attributeMapping?: string[];
    productAttributeList?: {
        extendedName?: string; // Nhỏ 6” - Dày
        extendedValue?: string; // nho_day
        productAttributeItem: {
            attributeId?: string;
            priceAdjustmentValue?: number; // 80000
        }[];
    }[];
    productsVariant?: string[];
}

export default ProductModel;
