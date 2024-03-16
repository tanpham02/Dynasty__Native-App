import { BaseModel } from "@/types";

interface BannerModel extends Omit<BaseModel, "status"> {
    name?: string
    priority?: number
    url?: string
    redirect?: string
}

export default BannerModel