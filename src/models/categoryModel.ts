import { BaseModel } from "@/types"
import ProductModel from "./productModel"

interface CategoryModel extends BaseModel {
    name?: string
    products?: ProductModel
    childrenCategory?: {
        parentId: string
        category: CategoryModel[],
        _id: string
    }
    slug?: string
    priority?: number
    visible?: boolean
    isShowHomePage?: boolean
}

export default CategoryModel