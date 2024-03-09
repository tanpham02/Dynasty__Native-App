export interface SearchParams {
    searchText?: string;
    pageIndex?: number;
    pageSize?: number;
    status?: string;
    sort?: string;
    ascending?: boolean;
    [key: string]: any;
}


export enum ModelStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export interface BaseModel {
    _id: string
    status: ModelStatus
}

export interface ListDataResponse<T> {
    data: T[]
    totalElement: number,
    pageIndex: number,
    pageSize: number,
    totalPage: number,
    isLastPage: boolean
}