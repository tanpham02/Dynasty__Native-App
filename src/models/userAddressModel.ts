export interface UserAddressModel {
    city?: string,
    cityId?: number,
    district?: string,
    districtId?: number,
    ward?: string,
    wardId?: number,
    location?: string,
    fullName?: string,
    phoneNumber?: string,
    isDefault?: boolean
}

export interface UserAddressResponse {
    customerId?: string
    addressList?: UserAddressModel[]
}

export interface UserAddressRequest {
    customerId?: string
    addressList?: UserAddressModel
}