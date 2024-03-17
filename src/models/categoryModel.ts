import { BaseModel } from "@/types"
import ProductModel from "./productModel"


interface ChildrenCategoryModel {
    parentId?: string
    category?: CategoryModel[],
    _id?: string
}

interface CategoryModel extends BaseModel {
    name?: string
    products?: ProductModel
    childrenCategory?: ChildrenCategoryModel
    slug?: string
    priority?: number
    visible?: boolean
    isShowHomePage?: boolean
    avatar?: string
}

export default CategoryModel